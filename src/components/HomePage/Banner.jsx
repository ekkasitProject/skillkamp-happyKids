import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import { GrPrevious, GrNext } from "react-icons/Gr";

const Slide = () => {
  const [currentImage, setCurrentImage] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await axios.get(
        "https://skillkamp-api.com/v1/api/images/landing"
      );
      const responseData = response.data;
      const loadedImages = responseData.detail.map((url, index) => ({
        id: index,
        url,
      }));
      setImages(loadedImages);
      setCurrentImage(loadedImages[0]);
    };
    fetchBanner();
  }, []);

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, images]);

  // nav images
  const renderNavButtons = () => {
    return images.map((image, index) => (
      <button
        key={index}
        onClick={() => {
          setCurrentImage(image);
          setCurrentIndex(index);
        }}
        className={currentIndex === index ? "active" : ""}
      ></button>
    ));
  };

  return (
    <div className="container-banner">
      {currentImage && <img src={currentImage.url} alt={currentImage.alt} />}
      <div className="nav-img">{renderNavButtons()}</div>
      <div>
        <button className="prev-button" onClick={handlePrev}>
          <GrPrevious className="prev-icon" />
        </button>
        <button className="next-button" onClick={handleNext}>
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Slide;
