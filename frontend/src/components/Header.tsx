import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';

const Header = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            MERN AUTH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>

                    <NavDropdown.Item>Log out</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <FaSignInAlt /> Sign In
                  </Nav.Link>

                  <Nav.Link as={Link} to={'/register'}>
                    <FaSignOutAlt /> Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
