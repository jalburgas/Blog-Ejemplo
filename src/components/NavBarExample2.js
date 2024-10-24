import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet, Link  } from 'react-router-dom';


export const NavBarExample2 = () => {
  return (
    <>
    <Navbar className='navBg2' variant="dark" expand='navbar-expand-lg'>
    <Container>
      <Navbar.Brand as ={Link} to="/"><img src='./public/logo192.png' alt=''></img>Ujap en linea</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        
        <button type="button" class="btn btn-outline-info"><Nav.Link as ={Link} to="/Home">Inicio</Nav.Link></button>
         <a>-</a>
         <a class="btn btn-primary" href="https://"target="_blank"> Estatus Alumno</a>
          <a>-</a>
         <a class="btn btn-primary" href="https://" target="_blank"> Secciones Cerradas</a>
          <a>-</a>
         <a class="btn btn-primary" href="https://" target="_blank"  width="200" height="150" border="0"> Solicitud de Ingreso</a>
         
          <a>-</a>

         <a class="btn btn-primary" href="javascript:wVentana(\'../chatbot/index.php\', \'height=560,width=360,status=yes,toolbar=no,menubar=no,location=no,scrollbars=no,resizable=yes\')"><div id="tituloUJAP">Hola Como Puedo Ayudarte&nbsp;<img src="./img/robot.jpg" /></div></a>  
                 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <section>
     <Outlet></Outlet>
  </section>
  </>
  )
}
