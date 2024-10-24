import React from 'react'
import { NavBarExample } from './NavBarExample'
import { NavBarExample2 } from './NavBarExample2'
import { Card1 } from './Card1'
import { Correos } from './Correos'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';



export const Home = () => {
  let Correost =[
   
    "Ingreso a la Universidad",
    "",
    "Acropolis Aula virtual",
    "",
    "Direccion Administracion",
    "",    
    "Para cualquier otra Inquietud",
    "", 
    "UJAP en Linea Direccion de Sistemas"
    

  ];
  return (
   
    <div>
      <NavBarExample/>     
      <NavBarExample2/> 
     
     <br></br>
      <Container>
      <Row>
        <Col><Card1 
       imagen='1'
       titulo='titulo1'
       contenido='wwwwww'
      /></Col>
        <Col> <Card1 
      imagen='2'
       titulo='titulo2'
       contenido='xxxxx'
       
      /></Col>
        <Col> <Card1 
      imagen='3'
       titulo='titulo3'
       contenido='ggggg'
       
      /></Col>
      </Row>
      <Row>
        <Col> <Card1 
      imagen='4'
       titulo='titulo4'
       contenido='xxxxx'
       
      /></Col>
        <Col> <Card1 
      imagen='5'
       titulo='titulo5'
       contenido='xxxxx'
       
      /></Col>
        <Col> <Card1 
      imagen='6'
       titulo='titulo6'
       contenido='xxxxx'
       
      /></Col>
      </Row>
    </Container>
    <br></br>
    <ListGroup horizontal> 
      
      {
        Correost.map( (correo, indice) =>{
               return (<ListGroup.Item key={indice} variant="dark">
            {correo}
            </ListGroup.Item>);
        })
      }
      </ListGroup>
      <Correos/> 
      
     
     </div>
      
  )
}
