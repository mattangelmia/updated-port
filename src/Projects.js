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
        <div id="port-items" style={{display: 'grid', gridTemplateColumns: 'auto auto auto', position: 'relative'}}>
   {portfolioItems.map(project =>
        
         <Card style={{ maxWidth: '25rem' , margin: '50px' , minHeight: '400px'}}>
         <Card.Img variant="top" src={require(`${project.image}`)} style={{height: '200px'}} />
        
         <Card.Body  >
           <Card.Title>{project.name}</Card.Title>
           <Card.Text style={{marginBottom: '4rem'}}>
                    {project.description}
           </Card.Text>
        <div className='btn-div' style={{position: 'absolute', bottom: '0', paddingBottom: '20px', left: '30%'}}>
        <Button variant="primary" >Check it out</Button>

        </div>
      
         </Card.Body>
       </Card>
)}
 </div>


 
    </div>
  )
}
