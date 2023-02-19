import PropTypes from 'prop-types';
import { PhotoCard, GalleryImage, GalleryBox } from './ImageGallery.styled.js';

const ImageGallery = ({ items, showImage }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <PhotoCard key={id} onClick={() => showImage(largeImageURL, tags)}>
      <GalleryImage src={webformatURL} alt={tags} loading="lazy" />
    </PhotoCard>
  ));
  return <GalleryBox>{elements}</GalleryBox>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  showImage: PropTypes.func.isRequired,
};
