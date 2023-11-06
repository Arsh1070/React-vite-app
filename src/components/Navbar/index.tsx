

import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { addSession, checkIfLogin, clearSession } from '../../utils/sessionManagement';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        addSession({ token: "g634rtf634tr43gfyt346t34trfv3tfr54" })
        navigate('/');
    }

    const handleLogout = () => {
        clearSession();
         navigate('/login');
    }
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Vite-React-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
            <Nav>
           {checkIfLogin() ?  <Button variant="danger" onClick={handleLogout}>Logout</Button> : <Button variant="primary" onClick={handleLogin}>Login</Button>}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     

    )
};
export default NavBar;
