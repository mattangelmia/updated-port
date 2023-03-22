import React from 'react'
import resume from ".//New-Resume.pdf"
import Button from 'react-bootstrap/Button';



export default function Resume() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%'}}>
        <a href={resume}>
        <Button variant="primary">Download my resume</Button>
            </a>
    </div>
  )
}
