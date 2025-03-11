import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Footer() {
  return (
    <footer className="bg-light-green py-4 mt-4">
      <Container>
        <Row>
          {/* Quick Links */}
          <Col md={4} className="mb-4 text-center text-md-start">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/work" className="text-dark text-decoration-none">Our Work</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Us Information */}
          <Col md={4} className="mb-4 text-center">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="small">
              <strong>Registered Office Address:</strong> SOIL Foundation, #63, C/o Narayan Hegde, Shirasagaon(V),<br />
              Kakkalli (P), Sirsi, Uttarkannada, 582336<br />
              <strong>Corporate Office Address:</strong> SOIL Foundation, #600/1, 8th Link Road, Alanahalli Layout, Mysore, 570028 <br />
              <strong>Contact:</strong> 8309221660 / 9480556719 <br />
              <strong>Email:</strong> <a href="mailto:soilfoundation2019@gmail.com" className="text-dark text-decoration-none">soilfoundation2019@gmail.com</a>
            </p>
            <a href="/contact#opinionForm">
              <button className="btn btn-custom">Get In Touch</button>
            </a>
          </Col>

          {/* Social Media Icons */}
          <Col md={4} className="mb-4 text-center">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="d-flex flex-column align-items-center">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center mb-2"
              >
                <FaInstagram size={23} className="me-2" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center mb-2"
              >
                <FaFacebookF size={23} className="me-2" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center mb-2"
              >
                <FaTwitter size={23} className="me-2" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center"
              >
                <FaLinkedinIn size={23} className="me-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center mt-3">
            <p className="footer-bottom-text">
              @ 2025 SOIL FOUNDATION | Developed by{' '}
              <a
                href="https://www.siliconmango.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline text-dark"
              >
                Silicon Mango
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;