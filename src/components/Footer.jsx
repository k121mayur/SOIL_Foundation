// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import logo from '../assets/logo.png'; // Replace with your actual logo
// import '../App.css'; // Ensure you import your custom CSS

// function Footer() {
//   return (
//     <footer style={{ backgroundColor: '#CDD8B7', padding: '20px 0', marginTop: '20px' }}>
//       <Container>
//         {/* First Row: Logo & Socials (left), Contact Us (center), optional space (right) */}
//         <Row className="align-items-center">
//           {/* Left: Logo & Social Media */}
//           <Col md={4} className="footer-left mb-3 mb-md-0 text-md-start text-center">
//             <img
//               src={logo}
//               alt="Soil Foundation Logo"
//               style={{ width: '150px', height: '100px' }}
//             />
//             {/* Same heading style as "Contact Us" */}
//             <h5 className="footer-heading" style={{ marginTop: '10px' }}>
//               Follow Us On
//             </h5>
//             <div>
//               <a
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="me-3"
//               >
//                 <FaInstagram size={28} />
//               </a>
//               <a
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="me-3"
//               >
//                 <FaFacebookF size={28} />
//               </a>
//               <a
//                 href="https://www.twitter.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="me-3"
//               >
//                 <FaTwitter size={28} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn size={28} />
//               </a>
//             </div>
//           </Col>

//           {/* Center: Contact Info */}
//           <Col md={4} className="footer-center mb-3 mb-md-0 text-center">
//             {/* Same heading style as "Follow Us On" */}
//             <h5 className="footer-heading">Contact Us</h5>
//             <p style={{fontWeight: 'bold', fontSize: '15px'}}>SOIL Foundation<br/>
//             Rameshwar Chowk, Pune, Maharashtra, India – 414006<br/>
//             Phone: +91 12345 67890<br/>
//             Email: contact@soilfoundation.org</p>
//             <a href="/contact#opinionForm">
//               <button className="btn btn-custom">Share your Opinion</button>
//             </a>
//           </Col>

//           {/* Right (Optional): If you want something aligned right, add here. Otherwise, keep empty. */}
//           <Col md={4} className="footer-right text-md-end text-center" />
//         </Row>

//         {/* Second Row: Bottom Center Text */}
//         <Row>
//           <Col className="text-center mt-3">
//             <p className="footer-bottom-text">
//               2025 SOIL FOUNDATION – Developed by{' '}
//               <a
//                 href="https://www.siliconmango.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ textDecoration: 'underline', color: 'inherit' }}
//               >
//                 Silicon Mango
//               </a>
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Replace with your actual logo

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#CDD8B7',
        padding: '20px 0',
        marginTop: '20px',
        position: 'relative' // Needed for absolute positioning of the left group
      }}
    >
      <Container>
        {/* Left Bottom Corner: Logo, "Follow Us On", and Social Media Icons */}
        <div
          className="footer-left"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            textAlign: 'left'
          }}
        >
          <img
            src={logo}
            alt="Soil Foundation Logo"
            style={{ width: '80px', height: 'auto' }}
          />
          <h5 className="footer-heading" style={{ marginTop: '10px' }}>
            Follow Us On
          </h5>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '8px' }}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '8px' }}
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '8px' }}
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Center: Contact Us Information */}
        <Row>
          <Col className="footer-center text-center">
            <h5 className="footer-heading">Contact Us</h5>
            <p style={{fontWeight: 'bold', fontSize: '15px'}}>SOIL Foundation<br/>
             Rameshwar Chowk, Pune, Maharashtra, India – 414006<br/>
             Phone: +91 12345 67890<br/>
             Email: contact@soilfoundation.org</p>
            <a href="/contact#opinionForm">
              <button className="btn btn-custom">Share your Opinion</button>
            </a>
          </Col>
        </Row>

        {/* Bottom Center: Copyright */}
        <Row>
          <Col className="text-center mt-3">
            <p className="footer-bottom-text">
              2025 SOIL FOUNDATION – Developed by{' '}
              <a
                href="https://www.siliconmango.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', color: 'inherit' }}
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

