import React, { useState } from "react";

function ImageToggleButton({ firstImage, secondImage }) {
  const [currentImage, setCurrentImage] = useState(firstImage);

  const handleClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === firstImage ? secondImage : firstImage
    );
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      <img src={currentImage} alt="Button Image" width="30" height="30" />
    </button>
  );
}

export default ImageToggleButton;
