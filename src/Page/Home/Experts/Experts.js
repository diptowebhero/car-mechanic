import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts,setExpert] = useState([]);

    useEffect(()=>{
        fetch('./expert.json')
        .then(res => res.json())
        .then(data => setExpert(data))
    },[])
    return (
        <div id="experts" className="mt-5">
            <h1>Our Experts</h1>
            <div>
                <Row xs={1} md={3} className="g-4 w-100 mx-auto container mt-5">
                    {experts.map(expert => <Expert key = {expert.name} expert={expert}></Expert>)}
                </Row>
            </div>
        </div>
    );
};

export default Experts;