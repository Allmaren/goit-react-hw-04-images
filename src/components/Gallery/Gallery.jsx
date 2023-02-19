import { Component } from 'react';

import Loader from '../elements/Loader/Loader';
import SearchBar from './Searchbar/Serchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/elements/Modal/Modal';
import { SearchQuery } from '../elements/services/image-api';
// import { ButtonUp } from 'components/elements/ButtonUp/ButtonUp';

import { Block, TextError, ButtonLoadMore } from '../Gallery/Gallery.styled.js';
import './index.css';

export class Gallery extends Component {
  state = {
    search: '',
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    // totalresult: 0,
    showModal: false,
    imageDetails: null,
    showMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImage();
    }
  }

  async fetchImage() {
    try {
      this.setState({ isLoading: true });
      const { search, page } = this.state;
      const data = await SearchQuery(search, page);

      this.setState(prevState => {
        return {
          items: [...prevState.items, ...data.hits],
          showMore: prevState.page < Math.ceil(data.totalHits / 12),
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  showImage = (largeImageURL, tags) => {
    this.setState({
      showModal: true,
      imageDetails: {
        largeImageURL,
        tags,
      },
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      imageDetails: null,
    });
  };

  searchImage = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { items, isLoading, error, imageDetails, showModal, showMore } =
      this.state;
    const { searchImage, loadMore, showImage, closeModal } = this;

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
  }
}
