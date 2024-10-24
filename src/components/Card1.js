import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Card1 = ( {titulo, contenido, imagen} ) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../imagenes/${imagen}.jpg`)} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {contenido}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
export default Card1;