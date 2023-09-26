import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter from '../assets/meter.svg';
import meter2 from '../assets/meter2.svg';
import meter1 from '../assets/meter1.svg';
import colorsharp from '../assets/colorsharp.png';
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className='skill' id='skills'>
          <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>Skills</h2>
                    <p>In the realm of technology and creativity, I thrive at the intersection. My skills are a testament to my commitment to delivering seamless digital experiences and expressing myself artistically. Here's what I bring to the table:</p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div className='item'>
                        <img src={meter1} alt="image"/>
                        <h5>HTML</h5>
                    </div>
                    <div className='item'>
                        <img src={meter1} alt="image"/>
                        <h5>CSS</h5>
                    </div>
                    <div className='item'>
                        <img src={meter2} alt="image"/>
                        <h5>JavaScript</h5>
                    </div>
                    <div className='item'>
                        <img src={meter2} alt="image"/>
                        <h5>ReactJS</h5>
                    </div>
                    <div className='item'>
                        <img src={meter2} alt="image"/>
                        <h5>MERN</h5>
                    </div>

                    <div className='item'>
                        <img src={meter} alt="image"/>
                        <h5>C++</h5>
                    </div>
                </Carousel>
                </div>
                </Col>
                </Row>
                </Container>
                <img className='backgroung-image-left' src={colorsharp}></img>  
        </section>
      )
}
