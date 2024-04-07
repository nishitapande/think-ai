import React from "react";
import Container from "react-bootstrap/Container";
import PhotoGallery from "../components/PhotoGallery";
import { photos } from "../data";
const GalleryPage = () => {
  return (
    <div>
      <Container>
        <h2>Gallery</h2>
        <PhotoGallery  photos={photos} />
      </Container>
    </div>
  );
};

export default GalleryPage;
