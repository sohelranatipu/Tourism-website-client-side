
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import rating from '../../images/rating.jpg.png';
import './Package.css'

const Package = (props) => {
    const {name,price,description,image,_id} = props.package;
   
    
    return (
        <div>
            <Col>
                    <Card style={{textAlign:'left'}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                             {description.slice(0,120)}
                        </Card.Text>
                        <Card.Img style={{width:'40%',margin:'10px 0'}}   variant="top"  src={rating} />
                        <h3 style={{marginBottom:'18px'}}>$ {price}</h3>
                        <Link to={`booking/${_id}`}><Button variant="warning">Book Now</Button></Link>
                        
                        </Card.Body>
                    </Card>
                </Col>
        </div>
    );
};

export default Package;