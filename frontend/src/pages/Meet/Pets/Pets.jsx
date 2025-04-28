import React from 'react';
import './Pets.css';
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import gatoFilter from "../../../img/gato-filter.png"
import perroFilter from '../../../img/perro-filter.png';
import ambosFilter from '../../../img/ambos-filter.png';
import {Link} from "react-router-dom"

const Pets = ({pets}) => {
  const [filter, setFilter] = useState('all')

  const filteredPets = pets.filter((p)=>{
    if(filter === 'all') return true;
    return p.type === filter;
  });

  return (
  <Container>
    <h2 className="py-10 title">Mascotas en Adopción</h2>
    <div className="d-flex justify-start mb-10 gap-4 flex-wrap">
      <Button onClick={() => setFilter('all')} className="w-35 button">
        <img src={ambosFilter} alt="" width={35} />
        Todos
      </Button>
      <Button onClick={() => setFilter('gato')} className="w-35 button">
        <img src={gatoFilter} alt="" width={30}  />
        Gatos
      </Button>
      <Button onClick={() => setFilter('perro')} className="w-35 button">
        <img src={perroFilter} alt="" width={30} />
        Perros
      </Button>
    </div>

    <Row>
      {filteredPets.map((p) => (
        <Col key={p.id} xs={12} sm={6} md={4} className="mb-4 d-flex">
          <Card className="w-full h-full">
            <Card.Img variant="top" src={p.img} className="object-cover h-64 w-full" />
            <Card.Body>
              <Card.Title className="name">{p.name}</Card.Title>
              <Card.Text className="text">
                <div>Edad: {p.age}</div>
                <div>Raza: {p.race}</div>
                <div>Descripción: {p.shortDescription}</div>
              </Card.Text>
              <Link to={`/pets/${p.id}`}><Button className="button">Conocer más</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
}


export default Pets