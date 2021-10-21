import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="mt-5">
            <h1>Our Services</h1>
            <div>
                <Row xs={1} md={3} className="g-4 w-100 container mx-auto mt-5">
                    {services.map(service=> <Service key={service.id} service={service}></Service>)}
                </Row>
            </div>
        </div>
    );
};

export default Services;