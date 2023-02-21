import { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Loader from '../elements/Loader/Loader';
import SearchBar from './Searchbar/Serchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/elements/Modal/Modal';
import { SearchQuery } from '../elements/services/image-api';
import { ReactComponent as MySVG } from '../elements/icon/arrow.svg';
import { ReactComponent as MyCAT } from '../elements/icon/cat.svg';

import {
  Block,
  TextError,
  ButtonLoadMore,
  Fon,
} from '../Gallery/Gallery.styled.js';
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

  const notify = () => {
    toast.error(`Wow-wow... there no items for you request`, {
      theme: 'dark',
    });
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        const data = await SearchQuery(search, page);
        setItems(prevItems => [...prevItems, ...data.hits]);
        setTotalPageFind(data.totalHits);

        if (data.hits.length === 0) {
          setShowMore(false);
          notify();
        }
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
      <ToastContainer />
      <ScrollToTop smooth component={<MySVG />} />
      {totalPageFind === 0 && search && (
        <Fon>
          <p>No items - enjoy cat :)</p>
          <MyCAT />
        </Fon>
      )}
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
