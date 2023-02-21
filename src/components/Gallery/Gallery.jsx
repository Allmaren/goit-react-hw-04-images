import { useState, useEffect } from 'react';

import Loader from '../elements/Loader/Loader';
import SearchBar from './Searchbar/Serchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/elements/Modal/Modal';
import { SearchQuery } from '../elements/services/image-api';
// import { ButtonUp } from 'components/elements/ButtonUp/ButtonUp';

import { Block, TextError, ButtonLoadMore } from '../Gallery/Gallery.styled.js';
import './index.css';

export const Gallery = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [imageDetails, setImageDetails] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [totalPageFind, setTotalPageFind] = useState(0);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        const data = await SearchQuery(search, page);
        setItems(prevItems => [...prevItems, ...data.hits]);
        console.log(items);
        if (page < Math.ceil(data.totalHits / 12)) {
          setShowMore(true);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
  }, [search, page]);

  const searchImage = ({ search }) => {
    setSearch(search);
    setItems([]);
    setPage(1);
  };

  const showImage = (largeImageURL, tags) => {
    setShowModal(true);
    setImageDetails({ largeImageURL, tags });
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    if (page <= totalPageFind) {
      setShowMore(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setImageDetails(null);
  };

  return (
    <>
      <Block>
        <SearchBar onSubmit={searchImage} />
      </Block>

      <ImageGallery items={items} showImage={showImage} />
      {error && <TextError>{error}</TextError>}
      {isLoading && <Loader />}
      {showMore && (
        <ButtonLoadMore onClick={loadMore} type="button">
          Load more
        </ButtonLoadMore>
      )}
      {showModal && (
        <Modal close={closeModal}>
          <ImageGalleryItem {...imageDetails} />
        </Modal>
      )}
    </>
  );
};
