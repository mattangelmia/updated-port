import React from 'react'
import resume from ".//New-Resume.pdf"
import Button from 'react-bootstrap/Button';



export default function Resume() {
  return (
    <div className="fade-in" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
        <a href={resume}>
        <Button variant="primary">Download my resume</Button>
            </a>
    </div>
  )
}
