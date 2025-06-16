import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import bannerImage from "../assets/WesternGhat.jpg";
import directorPhoto from "../assets/profile_icon.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function AboutUsPage() {
  return (
    <>
      {/* Banner Section */}
      <div style={{ position: "relative" }}>
        <img
          src={bannerImage}
          alt="Banner"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            textAlign: "right",
            color: "#fff",
            fontFamily: "Times New Roman, Noto Serif Devnagri",
            fontWeight: "bold",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              margin: 0,
            }}
          >
            ABOUT US
          </h1>
        </div>
      </div>

      <Container className="py-4" style={{ maxWidth: "800px" }}>
        {/* About Organization Section */}
        <section
          id="whoarewe"
          className="mb-5 text-center"
          style={{ scrollMarginTop: "150px" }}
        >
          <h2
            className="section-heading mb-3"
            style={{ color: "#496907", fontSize: "1.9rem", fontWeight: "900" }}
          >
            Who We Are
          </h2>
          <p style={{ textAlign: "justify" }}>
            SOIL Foundation is an ambitious civil society organization founded
            by young development professionals in 2019 under the Indian Trust
            Act. The foundation is compliant with 80G, 12A, Darpan and CSR-1
            certifications. A Dynamic Team with Local Roots and an Educational
            Edge Our team is a vibrant blend of experienced development
            professionals and dedicated education experts, all committed to
            transformative community impact. We bring expertise in: 
            <ul> 
              <li>Community
            Mobilization & Natural Resource Conservation: Spearheading
            initiatives that actively engage local communities and preserve our
            environment. </li>
            <li>Sustainable Agriculture & Traditional Farming
            Systems: Advancing methods that honour timeless farming practices
            while promoting eco-friendly innovations.</li>

            <li>Institutional Management
            & Innovative Project Implementation: Guiding scalable, impactful
            interventions that drive sustainable change.</li>

            <li>Education & Capacity
            Building: Our education experts design cutting-edge learning
            initiatives and tailored training programs to empower communities.
            Graduates of the esteemed Tata-Dhan Academy in Madurai, our founders
            and experts combine local insights with global best practices to
            create interventions that are both impactful and enduring.</li>

            </ul>
          </p>
        </section>

        {/* Vision Section */}
        <section id="vision" className="about-card bg-light-green mb-5 p-4">
          <h3
            className="section-heading text-center mb-3"
            style={{ color: "#496907", fontSize: "1.9rem", fontWeight: "900" }}
          >
            VISION
          </h3>
          <p style={{ textAlign: "justify" }}>
            We envision a future where every individual thrives—guided by quality education, a preserved natural environment, empowered women leading change, and tribal communities confidently navigating modern challenges
          </p>
        </section>

        {/* Mission Section */}
        <section id="missions" className="about-card bg-light-green mb-5 p-4">
          <h3
            className="section-heading text-center mb-3"
            style={{ color: "#496907", fontSize: "1.9rem", fontWeight: "900" }}
          >
            MISSION
          </h3>
          <ul style={{ textAlign: "justify" }}>
            <li>
              <strong>Demonstrating Giving Back:</strong> We actively
              demonstrate the theory of giving back to society, addressing
              impending threats faced by all living beings.
            </li>
            <li>
              <strong>Sustainable Practices:</strong> We champion sustainable
              practices that preserve ecological balance.
            </li>
            <li>
              <strong>Equitable Service:</strong> Our distinctive feature lies
              in treating all living beings equally while fostering a balanced
              environment.
            </li>
            <li>
              <strong>Resource Conservation:</strong> We conserve natural
              resources, promote livelihoods, and encourage traditional and
              organic agriculture.
            </li>
          </ul>
        </section>

        {/* Board of Directors Section */}
        <section id="bod" className="mb-5 text-center">
          <h2
            className="section-heading mb-4"
            style={{ fontSize: "2rem", fontWeight: "900" }}
          >
            Board Of Directors
          </h2>
          <hr className="mx-auto mb-4" style={{ width: "200px" }} />

          <Row className="justify-content-center">
            {/* Card 1 */}
            <Col md={8} className="mb-4">
              <Card className="director-card mx-auto">
                <Card.Body className="d-flex">
                  <img
                    src={directorPhoto}
                    alt="Director"
                    className="director-photo me-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p style={{ textAlign: "justify" }}>
                      <strong>Mr. Narayan Hegde</strong>
                      <br />
                      President
                      <br />
                      Contact: 8762456114 / 8309221660
                      <br />
                      Mail:{" "}
                      <a
                        href="mailto:nanihegde09@gmail.com"
                        className="text-dark text-decoration-none"
                      >
                        nanihegde09@gmail.com
                      </a>
                      <br />
                      Address: S/O Balakrishna Hegde, #63, Muski Village,
                      Vanalli Panchayat, Tal. Sirsi, Dist. Uttara Kannada,
                      581336
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={8} className="mb-4">
              <Card className="director-card mx-auto">
                <Card.Body className="d-flex">
                  <img
                    src={directorPhoto}
                    alt="Director"
                    className="director-photo me-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p style={{ textAlign: "justify" }}>
                      <strong>Mrs. Vinayashree Gaonkar</strong>
                      <br />
                      Secretary
                      <br />
                      Contact: 9480556719 / 6360284426
                      <br />
                      Mail:{" "}
                      <a
                        href="mailto:vinugaonkar96@gmail.com"
                        className="text-dark text-decoration-none"
                      >
                        vinugaonkar96@gmail.com
                      </a>
                      <br />
                      Address: D/O Shivaram Gaonkar, #57, Beegar, Vajralli Post,
                      Tal. Yellapur, Dist. Uttara Kannada, 581337
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={8} className="mb-4">
              <Card className="director-card mx-auto">
                <Card.Body className="d-flex">
                  <img
                    src={directorPhoto}
                    alt="Director"
                    className="director-photo me-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p style={{ textAlign: "justify" }}>
                      <strong>Mr. Paresh Hegde</strong>
                      <br />
                      Treasurer
                      <br />
                      Contact: 7892865369
                      <br />
                      Mail:{" "}
                      <a
                        href="mailto:pareshshegde@gmail.com"
                        className="text-dark text-decoration-none"
                      >
                        pareshshegde@gmail.com
                      </a>
                      <br />
                      Address: S/O Sooryanarayana Hedge, #117, Belagundli,
                      Tarehalli, Shigemane, Ummachgi Panchayat, Tal. Yellapur,
                      Dist. Uttara Kannada, 581347
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Team Section */}
        <section id="team" className="about-card bg-light-green mb-5 p-4">
          <h2
            className="section-heading text-center mb-3"
            style={{ fontSize: "1.9rem", fontWeight: "900" }}
          >
            Team
          </h2>
          <p className="mb-0" style={{ textAlign: "justify" }}>
            SOIL operates with an expert team proficient in community
            mobilization, natural resource conservation, livelihood enterprise
            development, women’s empowerment, microfinance, financial literacy,
            human resource development, and management of Farmer’s Producers
            Organizations (FPOs).
          </p>
        </section>
      </Container>
    </>
  );
}

export default AboutUsPage;
