import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalBackdrop, ModalImg } from './Modal.styled.js';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const closeEscape = ({ code }) => {
      if (code === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', closeEscape);
    return () => document.removeEventListener('keydown', closeEscape);
  }, [close]);

  return createPortal(
    <ModalBackdrop onClick={closeModal}>
      <ModalImg>{children}</ModalImg>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
