import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import AboutUs from "../../img/AboutUs.png";
import "./AboutUsPreview.css";

const AboutUsPreview = () => {
  return (
    <section className="about-us-preview">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 text-center">
            <Image
              src={AboutUs}
              alt="Sobre Nosotros"
              className="preview-img"
              fluid
            />
          </Col>
          <Col md={6}>
            <h2>NOSOTROS</h2>
            <p>
              En nuestra plataforma conectamos personas con animales que buscan
              un hogar lleno de amor. También ayudamos a reunir mascotas
              perdidas con sus familias. Creemos en segundas oportunidades, y
              trabajamos todos los días para facilitar la adopción responsable y
              la difusión de casos urgentes.
            </p>
            <Button className="btn-custom">CONOCÉ MÁS</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsPreview;
