import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import portfolioItems from './PortfolioItems';
import newsImg from './news.jpg'


export default function Projects() {
  return (
    <div>
        <h1>Here are my projects</h1>
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
   {portfolioItems.map(project =>
        
         <Card style={{ maxWidth: '25rem' , margin: '50px'}}>
         <Card.Img variant="top" src={require(`${project.image}`)} style={{height: '200px'}} />
        
         <Card.Body>
           <Card.Title>{project.name}</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
)}
 </div>
    </div>
  )
}
