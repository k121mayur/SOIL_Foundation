import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bannerImage from "../assets/WesternGhat.jpg";
import Education from "../images/1.2.png";
import WomenEmpowerment from "../images/3.png";
import Environment from "../images/4.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ position: "relative" }}>
        <img
          src={bannerImage}
          alt="Banner"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "revert",
          }}
        />
        {/* Container for the overlay text */}
        <div
          style={{
            position: "absolute",
            top: "10%", // Position text near top
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "#fff",
            fontFamily: "Times new roman, Noto serif devnagri",
          }}
        >
          {/* Main Title */}
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              margin: 0,
            }}
          >
            WELCOME TO SOIL FOUNDATION
          </h1>

          {/* Subtitle */}
          <h2
            style={{
              color: "#ffd203",
              fontSize: "1.5rem",
              fontWeight: "bold",
              //backgroundColor: 'rgb(88, 161, 179)'
            }}
          >
            Join us in Creating Sustainable Change!!!
          </h2>
        </div>
      </div>

      {/* Western Ghats Section */}
      <Container className="py-4" style={{ maxWidth: "800px" }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "Times new roman, Noto serif devnagri",
            fontSize: "1.9rem",
            fontWeight: "900",
            color: "#496907",
          }}
        >
          Background
        </h2>
        <p
          style={{
            fontFamily: "Times new roman, Noto serif devnagri",
            textAlign: "justify",
          }}
        >
          The Western Ghats, a mesmerizing biodiversity hotspot, have always
          been our muse. Stretching approximately 1,600 Kilometres along India’s
          western coast, this majestic mountain range is much more than a scenic
          marvel—it is a guardian of ecological and environmental balance. Home
          to an astounding diversity of life, the Ghats nurture vital rivers
          like the Godavari, Krishna, Tungabhadra, and Kaveri. These rivers not
          only sustain the region’s rich biodiversity but also underpin its
          agriculture and local economies. Yet, beyond its ecological wonders
          lie stark challenges. The communities that call these lands home face
          severe hurdles in education and employment. In many areas along the
          Western Ghats, major industries are absent, leaving agriculture as the
          sole lifeline. This heavy dependency on agriculture makes communities
          particularly vulnerable to the erratic whims of nature—be it the
          unpredictable monsoons, droughts, or natural disasters. Educational
          facilities are sparse and often under-resourced, further compounding
          the struggle for quality learning and skill development among local
          children and youth. The situation is even more challenging for the
          local tribal populations. Many indigenous communities, with their rich
          cultural heritage and traditional knowledge, grapple with limited
          access to modern education and employment opportunities. Low literacy
          rates and inadequate vocational training restrict their ability to
          diversify away from subsistence agriculture. Consequently, these
          communities are trapped in a cycle of economic and social instability,
          with few alternatives to improve their livelihoods or secure a
          sustainable future. It was this deep awareness a blend of awe for the
          Western Ghats and concern for the vulnerable lives intertwined with
          its fate that prompted the initiation of SOIL Foundation. Our mission
          emerged from a heartfelt desire to address these multifaceted
          challenges. We recognized that preserving nature would not be enough;
          we needed to empower these communities by opening doors to new
          educational and employment opportunities and by nurturing the unique
          strengths of local tribes and women population. Fuelled by the belief
          in “giving forward” to society, we set out on a mission to safeguard
          nature’s legacy and revitalize our communities.
        </p>
      </Container>

      {/* Challenges Faced by Western Ghats */}
      <Container className="py-4" style={{ maxWidth: "800px" }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "Times new roman, Noto serif devnagri",
            fontSize: "1.9rem",
            fontWeight: "900",
            color: "#496907",
          }}
        >
          Challenges Faced By Western Ghats
        </h2>
        <p
          style={{
            fontFamily: "Times new roman, Noto serif devnagri",
            textAlign: "justify",
          }}
        >
          The Western Ghats are under critical strain. Deforestation, mining,
          and encroachment, unscientific forest product collection coupled with
          poor resource management, are rapidly eroding this vital ecosystem.
          This results in habitat loss, alarming biodiversity decline, and
          crippling water scarcity, directly impacting the livelihoods of local
          communities.
        </p>
      </Container>

      <Container className="py-4 text-center" style={{ maxWidth: "800px" }}>
        <strong
          style={{
            fontSize: "1.2rem",
            fontFamily: "Times new roman, Noto serif devnagri",
            fontStyle: "italic",
            color: "#496907",
          }}
        >
          Recognizing the Western Ghats' vital ecological role, SOIL Foundation
          dedicates itself to its protection through sustainable and
          conservation-focused programs.
        </strong>
      </Container>

      {/* Three Featured Images (Programmes) */}
      <Container className="py-4" style={{ maxWidth: "800px" }}>
        {/* Centered Heading */}
        <h2
          className="text-center"
          style={{
            fontFamily: "Times new roman, Noto serif devnagri",
            fontSize: "1.9rem",
            fontWeight: "900",
            color: "#496907",
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
                fontWeight: "bold",
                color: "#496907",
                fontSize: "1.2rem",
                fontFamily: "Times new roman, Noto serif devnagri",
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
                fontWeight: "bold",
                color: "#496907",
                fontSize: "1.2rem",
                fontFamily: "Times new roman, Noto serif devnagri",
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
                fontWeight: "bold",
                color: "#496907",
                fontSize: "1.2rem",
                fontFamily: "Times new roman, Noto serif devnagri",
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
