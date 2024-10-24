import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link  } from 'react-router-dom';
export const NavBarExample = () => {
  return (
    <>
    <Navbar className='navBg' variant="dark" >
    <Container>

    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <from id="frmIngreso" action="https://" enctype="application/x-www-form-urlencoded" method="post" onsubmit="javascript: return(verificarFORM())">
       <input type="text" id="cj_clavezz" name="cj_clavezz" placeholder="Usuario" className="w-25" ></input>
       <input type="HIDDEN" name="Perm" value="Si"></input>
       <input type="password" id="cj_contrasena" name="cj_contrasena" placeholder="Contraseña" className="w-25"></input>
       <input class="btn btn-primary" type="submit" value="Ingresar"></input>
      </from>
        <a class="btn btn-outline-danger" href="https://"> Recordar Contrase&ntilde;a</a>
      
      
        
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
