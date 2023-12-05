import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import "App.css";
import TrackVisibility from "react-on-screen";
// import Button from 'react-bootstrap/Button';

export default function Banner () {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer", "Web App Developer", "Full Stack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

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
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Tafadzwa`}{" "}
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Developer", "Web App Developer", "Full Stack Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className='banner-text'>
                  Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences,

Bona fide photochromic LENS enthusiast - sunlight or indoors, I've got it covered. I tread the path of minimalism, finding beauty in simplicity and order. When I'm not crafting beautiful web experiences, you can find me reading ARTICLES or swaying to the rhythm of Pop Music & Jazz, losing myself in the captivating flow of melodies. anyways you can CONTACT ME
                  </p>

                  {/* <>
                  <Button variant="outline-light">Light</Button>{' '}
                  <Button variant="outline-light">Light</Button>{' '}
                  <Button variant="outline-light">Light</Button>{' '}
                  </> */}

                
                  {/* <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                  {/* <br />
                </div>
              )}
            </TrackVisibility> */} 

            <h1>We Can Help You Take Your Business To The Next Level.</h1>
            <p>
            We offer a free consultation so that we can understand your specific needs and provide you with the best possible advice. 
            Contact us today to learn more about our services.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Col> 
        </Row>
      </Container>    
    </section>
  );
};
