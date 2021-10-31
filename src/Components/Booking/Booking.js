 
import React , { useState,useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const {user} = useAuth();
    const {packageId} = useParams();
    const [myPackage,setmyPackage] = useState({});
    

    useEffect(()=>{
        
        fetch(`https://frightful-moonlight-21065.herokuapp.com/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setmyPackage(data))
    },[])
    console.log(myPackage);
    return (
        <div style={{marginBottom:'100px'}} >
            <h1 style={{margin:'50px 0'}}>Book Now</h1>
            <div>
            <h5>Your Name: {user.displayName}</h5>
            <p>Your Email:{user.email}</p>
            <Card style={{ width: '30rem',margin:'0 auto',textAlign:'left' }} >
            <Card.Img variant="top" src={myPackage.image} />
            <Card.Body>
            <Card.Title>{myPackage.name}</Card.Title>
            <Card.Text>
                {myPackage.description}
            </Card.Text>
            <h3>Cost: ${myPackage.price}</h3>
            <Button style={{marginTop:'20px'}} variant="warning">Confirm Booking</Button>
            <Link to='/home'><Button style={{margin:'20px 0 0 70px'}} variant="warning">Go Back</Button></Link>
            </Card.Body>

        </Card>
            </div>
        </div>
    );
};

export default Booking;