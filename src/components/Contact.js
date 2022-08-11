import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assests/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_neti1x8', 'template_abvfpic', form.current, '2FsHhVXnFMtuUnGsx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text"
                          placeholder="Full Name"
                          name="user_name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          placeholder="Email"
                          name="user_email"
                          required
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input 
                          type="text" 
                          placeholder="Subject"
                          name="subject"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          placeholder="Type Your message Here"
                          name="message"
                          required
                        />
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}