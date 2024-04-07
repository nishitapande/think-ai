import React from "react";
import Card from "react-bootstrap/Card";
const About = () => {
  return (
    <div
      style={{
        zIndex: "2",
        borderTop: "1px solid grey",
        borderRadius: "15px",
        width: "100%",
        maxHeight: "120rem",
        position: "relative",
        backgroundColor: "white",
        top: "40rem",
      }}
    >
      <div style={{ margin: "0 12rem" }}>
        <h2 style={{ textAlign: "center", margin: "5rem 0 3rem" }}>
          About Think AI
        </h2>
        <Card
          style={{
            border: "none",
          }}
        >
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
            accumsan lacus vel facilisis volutpat est velit egestas. Semper
            viverra nam libero justo laoreet. Tincidunt vitae semper quis lectus
            nulla at. Porta non pulvinar neque laoreet suspendisse interdum
            consectetur. Nibh mauris cursus mattis molestie a iaculis at. Ac ut
            consequat semper viverra nam libero justo laoreet.
            <br />
            <br />
            Vel eros donec ac odio tempor orci dapibus. Morbi tristique senectus
            et netus et malesuada fames ac. Augue interdum velit euismod in
            pellentesque. Risus quis varius quam quisque id diam vel quam
            elementum. Id neque aliquam vestibulum morbi. Dolor purus non enim
            praesent. Mollis aliquam ut porttitor leo a diam sollicitudin tempor
            id. Eget aliquet nibh praesent tristique magna sit amet purus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Tellus
            cras adipiscing enim eu turpis egestas pretium aenean pharetra. A
            diam sollicitudin tempor id eu nisl. Enim praesent elementum
            facilisis leo vel fringilla est ullamcorper. Porta nibh venenatis
            cras sed felis eget velit. Purus sit amet volutpat consequat mauris
            nunc congue nisi vitae. Neque vitae tempus quam pellentesque nec.
            Non pulvinar neque laoreet suspendisse interdum consectetur libero
            id faucibus. Urna duis convallis convallis tellus id interdum velit.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
