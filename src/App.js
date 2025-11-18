import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">

        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <h1 className="text-center mt-4">Welcome to My React App</h1>

        <Container className="mt-5">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300" />
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300" />
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/300" />
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
}

export default App;
