import React from 'react';
import logo from '../assets/logo.png';
import codecheficon from '../assets/codecheficon.png';
import iglogo from '../assets/iglogo.png';
import logoln from '../assets/logoln.png';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <br />
            <img src={logo} alt="logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <br />
            <br />
            <div className='social-icon'>
              <a href='https://instagram.com/the_pine_world?igshid=NjIwNzIyMDk2Mg=='><img src={iglogo} alt="Instagram" /></a>
              <a href='https://www.linkedin.com/in/toshika-raikwar-668a6b227/'><img src={logoln} alt="LinkedIn" /></a>
              <a href='https://www.codechef.com/users/raikwartoshika'><img src={codecheficon} alt="CodeChef" /></a>
            </div>
            <p>CopyRight 2023. All Rights Reserved.</p>
            <p>Made with Love.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
