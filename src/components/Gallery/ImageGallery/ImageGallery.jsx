import PropTypes from 'prop-types';
import { memo } from 'react';
import { PhotoCard, GalleryImage, GalleryBox } from './ImageGallery.styled.js';

const ImageGallery = ({ items, showImage }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <PhotoCard onClick={() => showImage(largeImageURL, tags)} key={id}>
      <GalleryImage src={webformatURL} alt={tags} loading="lazy" />
    </PhotoCard>
  ));

  return <GalleryBox>{elements}</GalleryBox>;
};

export default memo(ImageGallery);

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  showImage: PropTypes.func.isRequired,
};
