import React from 'react';
import Loader from "react-loader-spinner";
import './Spiner.css';


const Spiner = () => {
  return (
    <>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader"/>
    </>
  );
};

export default Spiner;