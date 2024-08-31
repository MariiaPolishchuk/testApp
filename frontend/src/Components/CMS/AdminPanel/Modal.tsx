import React from "react";

interface ModalProps {
  isOpen: boolean;
  imageList: string[];
  onSelectImage: (imageUrl: string) => void;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, imageList, onSelectImage, closeModal }) => {
  if (!isOpen) {
    return null; 
  }

  return (
    <div className="modal">
      <div className="modal-content-cms">
        <div className="modal-header">
        <h2>Image Gallery</h2>
        <span className="close" onClick={closeModal}>&times;</span>
        </div>
        <div className="image-list">
          {imageList.map((image, index) => (
            <img className="image-list-item" key={index} src={image} alt={`Image ${index}`} onClick={() => onSelectImage(image)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;


