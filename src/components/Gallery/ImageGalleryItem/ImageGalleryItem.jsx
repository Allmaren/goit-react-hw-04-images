import PropTypes from 'prop-types';
import { GalleryBox } from './ImageGalleryItem.styled.js';

const ImageGalleryItem = ({ largeImageURL, tags }) => {
  return (
    <GalleryBox>
      <img src={largeImageURL} alt={tags} />
    </GalleryBox>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
