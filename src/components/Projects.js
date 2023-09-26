import React from 'react'
import { Bootstrap } from 'react-bootstrap-icons';
import { Container,Row,Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Tab} from 'react-bootstrap';
import { ProjectCard } from './ProjectCards';
import StackOverflowss from '../assets/StackOverflowss.png';
import otpveriss from '../assets/otpveriss.png';
import spotifyss from '../assets/spotifyss.jpeg';
import payss from '../assets/payss.jpg';
export const Projects=()=>{
    const projects=[{
title:"StackOverflow Clone",
description:"During my internship at Nullclass, I developed a feature-rich clone of the popular Q&A platform, Stack Overflow. This ambitious project showcased my proficiency in both frontend and backend development using React and Node.js, respectively. What set this clone apart were the advanced features I integrated, including a secure payment gateway and OTP verification.",
imgUrl: StackOverflowss,

    },{
title:"OTP Verification Using Firebase",
description:"During my development journey, I created an OTP (One-Time Password) verification system using Firebase APIs. This project showcases my expertise in leveraging Firebase's authentication and verification services to enhance user security and streamline user onboarding processes.",
imgUrl:otpveriss,

    },
    {
title:"Payment Gateway Integration Using Razorpay APIs",
description:"As part of my development journey, I successfully implemented a robust payment gateway system using Razorpay APIs. This project showcases my expertise in integrating secure online payment processing into web and mobile applications, providing a seamless transaction experience for users.",
imgUrl:payss,

    },{
        title:"OpenWeather App",
        description:"The Weather Detection Web App is a dynamic web application developed during my internship at Teachnook. This project showcases my proficiency in web development technologies, including HTML, CSS, and JavaScript, while integrating real-time weather data from the OpenWeather API.",
        imgUrl:""  
    },{
        title:"Basic Spotify Clone",
        description:"During my journey as a web developer, I undertook the task of creating a basic Spotify clone using HTML, CSS, and JavaScript. This project demonstrates my proficiency in front-end web technologies and showcases my ability to design and develop user-friendly, interactive web applications.",
        imgUrl:spotifyss 
    }]
  return (
   <section className='project' id='projects'>
    <Container>
      <Row>
        <Col>
        <h2>Project</h2>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link eventKey="first">
          Tab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">
         Tab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">
          Tab 3
        </Nav.Link>
      </Nav.Item>
    
    </Nav>
    <br/>
    <Tab.Content>
<Tab.Pane eventKey="first">
  <Row>
    {
      projects.map((project,index)=>{
        return(
          <ProjectCard
          key={index}
          {...project}
          />
            )
      })
    }
  </Row>
 
</Tab.Pane>
<Tab.Pane eventKey="second">Second </Tab.Pane>
<Tab.Pane eventKey="second">Third </Tab.Pane>

      </Tab.Content>
      </Tab.Container>
        </Col>
      </Row>
    </Container>

   </section>
  )
}