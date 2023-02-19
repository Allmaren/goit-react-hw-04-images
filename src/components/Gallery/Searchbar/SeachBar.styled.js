import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #0eba11;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  font-size: 20px;
  margin-right: 20px;
  width: 350px;
  border-radius: 10px;
  outline: none;
  box-shadow: 2px 1px 5px rgb(52, 60, 62);
  transition: box-shadow 250ms;
  &:focus {
    outline: 1px solid #2196f3;
  }
`;

export const Button = styled.span`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  position: relative;
  top: 2px;
  left: -415px;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonForm = styled.button`
  display: inline-flex;
  padding: 15px 30px 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  background-color: #f6f5f5;
  color: #0eba11;
  box-shadow: 2px 1px 2px rgb(52, 60, 62);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:hover {
    scale: 1.02;
    background-color: #eadb10;
  }
`;
