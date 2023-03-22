import React from 'react'
import {Container, Row, Col} from "react-bootstrap";


export default function About() {
  return (
    <div style={{marginTop: "6%"}}>
      	<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">About Me</h1>
					</Container>
				</div>
			</Row>
			{/* Image of me and a paragraph next to the picture built in Bootstrap */}
			<Row>
				<Col xs={8} sm={6} md={6} lg={3} className="center mx-auto mb-lg-5 mb-m-4 mb-3">
					<img
						src="https://media.licdn.com/dms/image/C4E03AQESp6FhXzhc5g/profile-displayphoto-shrink_400_400/0/1600012048887?e=1683763200&v=beta&t=o2d1MnOPUSmNmNYVT_V47MbnX_cvufyzwKrv0JD2Hw0"
						alt="Me"
						className="img-fluid rounded-circle"
					/>
				</Col>

				<Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
					<p>
						My name is Matthew Angel, and I currently reside in Miami,Florida. I have about 2 and a half years of
						experience in Front End Development.
					</p>
					<p>
						I have experience in front-end web development, working with technologies like React, Bootstrap,
						CSS, HTML, JavaScript, JSON,and various other modern development
						Technologies.
					</p>
				</Col>
			</Row>
		</Container>  
    </div>
  )
}
