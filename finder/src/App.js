import React, { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
// import Modal from "./components/Modal/Modal";

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <ImageGallery/>       
      </div>
    );
  }
}

export default App;
