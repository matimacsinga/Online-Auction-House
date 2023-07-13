import {React} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function PageHeader(){

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Online Auction House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>

                                    <Nav.Link href="/" style={{paddingRight: '10px'}}>Home</Nav.Link> 
                                    <Nav.Link href='/list' style={{paddingRight: '10px'}}>Up for Auction</Nav.Link>
                                    <Nav.Link href="/login" style={{paddingRight: '10px'}}>Login</Nav.Link>
                                    <Nav.Link href="/signup" style={{paddingRight: '10px'}}>Signup</Nav.Link>
                                    <Nav.Link href="/info" style={{paddingRight: '10px'}}>Account Info</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};

export default PageHeader;