import {Navbar, NavDropdown} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header(){
    return(
    <div>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">K-oppler shop</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
            <Link to="/Add">Add product</Link>
            <Link to="/Update">Update product</Link>
            <Link to="/List">Product List</Link>
          </Nav>
          <nav>
            <NavDropdown title='user name'>
              <NavDropdown.ItemText>Logout</NavDropdown.ItemText>
            </NavDropdown>
          </nav>
        </Container>
      </Navbar>
    </div>
    )
}
export default Header
