import styled from 'styled-components';

export const PhotoCard = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 260px;
  object-fit: cover;

  &hover,
  &:focus {
    cursor: zoom-in;
  }
`;

export const GalleryBox = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 10px auto 0px;
  padding: 0px;
  justify-content: center;
`;
