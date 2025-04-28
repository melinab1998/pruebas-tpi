import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PetDetails.css';
import { useParams, useNavigate } from 'react-router-dom';

const PetDetails = ({ pets }) => {
    const { id } = useParams();  
    const navigate = useNavigate();
    const pet = pets.find((p) => p.id === parseInt(id));

    if (!pet) {
        return <div className="not-found">Mascota no encontrada</div>;
    }

    return (
        <div className="container-pet-card">
            <Card className="pet-card">
                <Card.Img
                    variant="top"
                    src={pet.img}
                    alt={`Imagen de ${pet.name}`}
                    className="pet-card-img"
                />
                <Card.Body>
                    <Card.Title className="pet-card-title">{pet.name}</Card.Title>
                    <Card.Subtitle className="pet-card-subtitle">{pet.type}</Card.Subtitle>

                    <div className="pet-card-info">
                        <p><strong>Raza:</strong> {pet.race}</p>
                        <p><strong>Edad:</strong> {pet.age} años</p>
                        <p><strong>Peso:</strong> {pet.weight} kg</p>
                        <p><strong>Género:</strong> {pet.gender}</p>
                    </div>

                    {pet.longDescription && (
                        <Card.Text className="pet-card-description">
                            {pet.longDescription}
                        </Card.Text>
                    )}

                    <div className="pet-card-buttons">
                        <Button 
                            className="btn-adopt"
                            onClick={() => navigate(-1)}
                        >
                            Volver
                        </Button>
                        <Button className="btn-adopt">
                            Solicitar adopción
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PetDetails;