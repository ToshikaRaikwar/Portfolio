import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer', 'Programmer', 'Artist'];
  const [text, setText] = useState('');
  const period = 9000;
  const [delta, setDelta] = useState(300 - Math.random() * 200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum) => loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Toshika Raikwar |`}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              A MERN stack developer and artist. I code for functionality and
              create art for expression.
            </p><a href='https://drive.google.com/file/d/15FsvQCiug4Cst1qfOEonLKDUtlQvQGJ9/view?usp=sharing'>
            <button onClick={() => console.log('connect')}>
              My Resume <ArrowRightCircle size={25} />
            </button></a>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
