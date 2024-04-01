import React from "react";
import "./photogallery.css";
import Image from "react-bootstrap/Image";

const PhotoGallery = () => {
  const images = [
    // {
    //   id: 0,
    //   src: "https://picsum.photos/900/900",
    //   with: "300px",
    //   height: "200px",
    //   area: "a",
    // },
    // {
    //   id: 1,
    //   src: "https://picsum.photos/200/200",
    //   width: "300px",
    //   height: "200px",
    //   area: "c",
    // },
    // {
    //   id: 2,
    //   src: "https://picsum.photos/250/400",
    //   width: "300px",
    //   height: "400px",
    //   area: "b",
    // },
    // {
    //   id: 3,
    //   src: "https://picsum.photos/300/200",
    //   width: "300px",
    //   height: "200px",
    //   area: "c",
    // },
    // {
    //   id: 4,
    //   src: "https://picsum.photos/300/200",
    //   width: "300px",
    //   height: "400px",
    //   area: "b",
    // },
    // {
    //   id: 5,
    //   src: "https://picsum.photos/300/200",
    //   width: "300px",
    //   height: "200px",
    //   area: "c",
    // },
    // {
    //   id: 6,
    //   src: "https://picsum.photos/300/200",
    //   with: "300px",
    //   height: "200px",
    //   area: "a",
    // },

    {
      src: "https://images.unsplash.com/photo-1517422361159-d84fd5600d22?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { src: "https://picsum.photos/802" },
    { src: "https://picsum.photos/803" },
    { src: "https://picsum.photos/804" },
  ];
  return (
    <>
      <div className="gallery">
        {images.map((image, i) => (
          <Image key={i} src={image.src} alt="" fluid />
        ))}
      </div>
    </>
  );
};

export default PhotoGallery;
