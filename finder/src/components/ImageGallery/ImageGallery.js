import React, { Component } from "react";
import axios from "axios";
import { createGalleryUrl } from "../../helpers/request";
import Spiner from "../Spiner/Spiner";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.js";
import Searchbar from "../Searchbar/Searchbar.js";
import Button from "../Button/Button.js";
import Modal from "../Modal/Modal.js";
import "./ImageGallery.css";

class ImageGallery extends Component {
  state = {
    images: [],
    loader: false,
    error: false,
    currentPage: 1,
    perPage: 12,
    showModal: false,
    image: "",
    search: "",
  }; 

  updateSearch = (value) => {
    this.setState({
      search: value,
    });
  };

  toggleModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));   
  };

  addImgToModal = (event) => {
    const value = event.target.dataset.value;
    this.setState({
      image: value,
    });
  };

  updateImages = (e) => {
    e.preventDefault();
    this.setState({
      loader: true,
    });
    const { search } = this.state;
    const URL = createGalleryUrl(search);

    axios
      .get(URL)
      .then((response) =>
        this.setState({
          images: response.data.hits,
          currentPage: 2,
        })
      )
      .catch((error) =>
        this.setState({
          error,
        })
      )
      .finally(() =>
        this.setState({
          loader: false,
        })
      );
  };

  loadMore = (e) => {
    e.preventDefault();
    const { currentPage, perPage, search } = this.state;
    const URL = createGalleryUrl(search, currentPage, perPage);

    axios
      .get(URL)
      .then((response) => {
        this.setState((prev) => ({
          images: [...prev.images, ...response.data.hits],
          currentPage: prev.currentPage + 1,
        }));
        this.scrollPage();
      })
      .catch((error) =>
        this.setState({
          error,
        })
      )
      .finally(() =>
        this.setState({
          loader: false,
        })
      );
  };

  scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const {
      images,
      loader,
      error,
      currentPage,
      perPage,
      showModal,
      image,
    } = this.state;
    return (
      <>
        {showModal && <Modal toggleModal={this.toggleModal} image={image} />}
        <Searchbar
          currentPage={currentPage}
          perPage={perPage}
          updateImages={this.updateImages}
          updateSearch={this.updateSearch}
        />
        {loader && <Spiner />}
        {!loader && !error && images.length > 0 && (
          <>
            <ul className="ImageGallery">
              {images.map((image) => (
                <ImageGalleryItem
                  {...image}
                  key={image.id}
                  toggleModal={this.toggleModal}
                  addImgToModal={this.addImgToModal}
                />
              ))}
            </ul>
            <Button loadMore={this.loadMore} />
          </>
        )}
        {error && <h1>ERROR!!!</h1>}
      </>
    );
  }
}

export default ImageGallery;
