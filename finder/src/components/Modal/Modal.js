import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeOnEsc);
  }

  closeOnEsc = (event) => {
    if (event.code === "Escape") {
      this.props.toggleModal();
    }
  };

  handleClickOverlay = (e) => {
     e.target.nodeName === "DIV" && this.props.toggleModal();
  };

  render() {
    const image = this.props.image;    
    return (
      <div className="Overlay" onClick={this.handleClickOverlay}>
        <div className="Modal">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
