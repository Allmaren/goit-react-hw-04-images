import styled from 'styled-components';

export const Block = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  margin-bottom: 15px;
  box-shadow: 1px 5px 10px rgb(52, 60, 62);
  background: linear-gradient(
    32deg,
    rgba(246, 243, 26, 1) 14%,
    rgba(246, 243, 26, 1) 39%,
    rgba(57, 118, 246, 1) 61%
  );
`;

export const TextError = styled.p`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

export const ButtonLoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: rgba(57, 118, 246, 1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 15px auto;
  color: #eadb10;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:hover {
    scale: 1.02;
    background-color: #eadb10;
    color: rgba(57, 118, 246, 1);
  }
`;
