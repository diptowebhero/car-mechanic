import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, img, price, id } = service
    return (
        <div id="">
            <Col>
                <Card className="rounded">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Title>Price: {price}</Card.Title>
                        <Link to={`/booking/${id}`}><button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;