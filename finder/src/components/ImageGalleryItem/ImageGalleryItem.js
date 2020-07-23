import React from "react";
import "./ImageGalleryItem.css"

const ImageGalleryItem = ({webformatURL, id, toggleModal, largeImageURL, addImgToModal}) => {
  return (
    <li className="ImageGalleryItem" onClick={toggleModal}>
      <img src={webformatURL} alt="" onClick={addImgToModal} className="ImageGalleryItem-image" id={id} data-value={largeImageURL}/>
    </li>
  );
};

export default ImageGalleryItem;
