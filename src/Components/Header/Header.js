import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
             <Navbar className="header py-3 " collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href as={Link} to="/home">TravelHub</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
                    
                    {
                        user.email && <>
                            <Nav.Link as={Link} to="/myPackages">My Packages</Nav.Link>
                            <Nav.Link as={Link} to="/managePackages">Manage Packages</Nav.Link>
                            <Nav.Link as={Link} to="/addNewPackage">Add New Package</Nav.Link>
                        </> 
                            
                        
                    }

                    {/* {
                        user.email &&
                        <Navbar.Text>
                    Signed:-  {user.displayName} 
                </Navbar.Text>
                }
                     */}
                    { user.email ?
                        <Button onClick={logOut} variant="warning">Log Out</Button> :<Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                        
                        
                        
                        
                      
               
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;