import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImage from '../assets/WesternGhat.jpg';
import Education from '../images/1.2.png';
import WomenEmpowerment from '../images/3.png';
import Environment from '../images/4.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ position: 'relative' }}>
        <img
          src={bannerImage}
          alt="Banner"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '500px',
            objectFit: 'revert',
          }}
        />
        {/* Container for the overlay text */}
        <div
          style={{
            position: 'absolute',
            top: '10%', // Position text near top
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Times new roman, Noto serif devnagri',
          }}
        >
          {/* Main Title */}
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              margin: 0,
            }}
          >
            WELCOME TO SOIL FOUNDATION
          </h1>

          {/* Subtitle */}
          <h2
            style={{
              color: '#ffd203',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              //backgroundColor: 'rgb(88, 161, 179)'
            }}
          >
            Join us in Creating Sustainable Change!!!
          </h2>
        </div>
      </div>

      {/* Western Ghats Section */}
      <Container className="py-4" style={{ maxWidth: '800px' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: 'Times new roman, Noto serif devnagri',
            fontSize: '1.9rem',
            fontWeight: '900',
            color: '#496907'
          }}
        >
          Western Ghats : The Green Jewel Of India
        </h2>
        <p
          style={{
            fontFamily: 'Times new roman, Noto serif devnagri',
            textAlign: 'justify',
          }}
        >
          The Western Ghats, a UNESCO World Heritage Site and a mesmerizing and critically
          important biodiversity hotspot, is a guardian of ecological and environmental
          balance in India. Stretching approximately 1,600 kilometers across Maharashtra,
          Goa, Karnataka, Kerala, and Tamil Nadu, along the western coast, this majestic
          mountain range harbors an astounding diversity of life. The Western Ghats is home
          to over 7,400 species of flora and fauna and the source of mighty rivers like the
          Narmada, Tapti, Godavari, Krishna, and Kaveri that carve their way through rugged
          terrain nourishing life and land.
        </p>
      </Container>

      {/* Challenges Faced by Western Ghats */}
      <Container className="py-4" style={{ maxWidth: '800px' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: 'Times new roman, Noto serif devnagri',
            fontSize: '1.9rem',
            fontWeight: '900',
            color: '#496907'
          }}
        >
          Challenges Faced By Western Ghats
        </h2>
        <p
          style={{
            fontFamily: 'Times new roman, Noto serif devnagri',
            textAlign: 'justify',
          }}
        >
          The Western Ghats are under critical strain. Deforestation, mining, and encroachment,
          unscientific forest product collection coupled with poor resource management, are
          rapidly eroding this vital ecosystem. This results in habitat loss, alarming biodiversity
          decline, and crippling water scarcity, directly impacting the livelihoods of local
          communities.
        </p>
      </Container>

      <Container className="py-4 text-center" style={{ maxWidth: '800px' }}>
        <strong
          style={{
            fontSize: '1.2rem',
            fontFamily: 'Times new roman, Noto serif devnagri',
            fontStyle: 'italic',
            color: '#496907',
          }}
        >
          Recognizing the Western Ghats' vital ecological role, SOIL Foundation dedicates itself
          to its protection through sustainable and conservation-focused programs.
        </strong>
      </Container>

      {/* Three Featured Images (Programmes) */}
      <Container className="py-4" style={{ maxWidth: '800px' }}>
        {/* Centered Heading */}
        <h2
          className="text-center"
          style={{
            fontFamily: 'Times new roman, Noto serif devnagri',
            fontSize: '1.9rem',
            fontWeight: '900',
            color: '#496907'
          }}
        >
          Programmes
        </h2>

        {/* Container for the 3 images in a row */}
        <Row className="d-flex justify-content-center">
          <Col md={4} className="text-center mb-4">
            {/* 1st Box */}
            <div>
              <img
                src={Environment}
                alt="Environment and Ecology"
                className="img-fluid"
              />
            </div>
            <p
              style={{
                fontWeight: 'bold',
                color: '#496907',
                fontSize: '1.2rem',
                fontFamily: 'Times new roman, Noto serif devnagri',
              }}
            >
              Environment and Ecology
            </p>
          </Col>

          {/* 2nd Box */}
          <Col md={4} className="text-center mb-4">
            <div>
              <img
                src={WomenEmpowerment}
                alt="Women Empowerment"
                className="img-fluid"
              />
            </div>
            <p
              style={{
                fontWeight: 'bold',
                color: '#496907',
                fontSize: '1.2rem',
                fontFamily: 'Times new roman, Noto serif devnagri',
              }}
            >
              Women Empowerment & Nutrition Security
            </p>
          </Col>

          {/* 3rd Box */}
          <Col md={4} className="text-center mb-4">
              <div>
                <img
                  src={Education}
                  alt="Education and Enterprise Development"
                  className="img-fluid"
                />
              </div>
              <p
                style={{
                  fontWeight: 'bold',
                  color: '#496907',
                  fontSize: '1.2rem',
                  fontFamily: 'Times new roman, Noto serif devnagri',
                }}
              >
                Education and Enterprise Development
              </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;