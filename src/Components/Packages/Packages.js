import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages,setPackages] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])
    return (
        <div style={{margin:'50px 100px'}}>
            <h1 style={{margin:'40px 0'}}>Our Packages</h1>
            { packages.length === 0 ?
                <Spinner animation="grow" />
            :
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    packages.map( myPackage => <Package key={myPackage._id} package={myPackage}></Package>)
                } 
           </Row>
            }


        </div>
    );
};

export default Packages;