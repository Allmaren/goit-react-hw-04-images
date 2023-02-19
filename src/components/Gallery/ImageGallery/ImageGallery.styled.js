import styled from 'styled-components';

export const PhotoCard = styled.li`
  display: flex;
  max-width: 320px;
  max-height: 240px;
  flex-direction: column;
  border-bottom-left-radius: 6px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
