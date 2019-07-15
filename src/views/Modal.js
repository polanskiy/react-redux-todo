import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalBox, ModalContent, ModalHeader, ModalTitle,
} from '../styles/Modal';

const Modal = ({
  title, isOpen, handleClose, children,
}) => {
  const modalMarkup = (
    <ModalBox
      onMouseDown={handleClose}
    >
      <ModalContent onMouseDown={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <div>
          {children}
        </div>
      </ModalContent>
    </ModalBox>
  );
  return (
    <React.Fragment>
      {isOpen
        ? ReactDOM.createPortal(modalMarkup, document.body)
        : null
      }
    </React.Fragment>
  );
};

export default Modal;
