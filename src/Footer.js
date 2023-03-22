import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <div>
        		<Container className="footer text-center my-auto py-auto">
			<Row id="social-icons">
				<Col>
				<SocialIcon url="https://github.com/mattangelmia" target="_blank" rel="noopener noreferrer" />
				</Col>
			<Col>
				<SocialIcon url="https://www.linkedin.com/in/matt-angel1/" target="_blank" rel="noopener noreferrer" />
			</Col>
		
			</Row>
		</Container>
    </div>
  )
}
