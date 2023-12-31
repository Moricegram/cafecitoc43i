import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Menu = ({ usuarioActivo, setUsuarioActivo }) => {
  const navegacion = useNavigate();

  const logout = () =>{
    // limpiamos el stado y el sessionStorage
    setUsuarioActivo({});
    sessionStorage.removeItem('usuarioLogueado');
    //redirecciona a la pagina principal
    navegacion('/');
  }


  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Cafecito
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink end to="/registro" className="nav-link">
              Registro
            </NavLink>
            {/* aqui pregunto si usuarioActivo tiene una propiedad guardada, cualquiera */}
            {usuarioActivo.email ? (
              <>
                <NavLink end to="/administrador" className="nav-link">
                  Administrador
                </NavLink>
                <Button variant="dark" onClick={logout}>Logout</Button>
              </>
            ) : (
              <NavLink end to="/login" className="nav-link">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
