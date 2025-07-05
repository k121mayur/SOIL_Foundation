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
            certifications.
            <strong>
              A Dynamic Team with Local Roots and an Educational Edge
            </strong>
            Our team is a vibrant blend of experienced development professionals
            and dedicated education experts, all committed to transformative
            community impact. We bring expertise in:
            <ul>
              <li>
                Community Mobilization & Natural Resource Conservation:
                Spearheading initiatives that actively engage local communities
                and preserve our environment.{" "}
              </li>
              <li>
                Sustainable Agriculture & Traditional Farming Systems: Advancing
                methods that honour timeless farming practices while promoting
                eco-friendly innovations.
              </li>

              <li>
                Institutional Management & Innovative Project Implementation:
                Guiding scalable, impactful interventions that drive sustainable
                change.
              </li>

              <li>
                Education & Capacity Building: Our education experts design
                cutting-edge learning initiatives and tailored training programs
                to empower communities. Graduates of the esteemed Tata-Dhan
                Academy in Madurai, our founders and experts combine local
                insights with global best practices to create interventions that
                are both impactful and enduring.
              </li>
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
            We envision a future where every individual thrives—guided by
            quality education, a preserved natural environment, empowered women
            leading change, and tribal communities confidently navigating modern
            challenges.
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
          <p>
            At SOIL Foundation, we ignite transformative progress across the
            Western Ghats by fusing cutting-edge educational innovations with
            dedicated environmental restoration, alongside targeted empowerment
            initiatives for women and tribal communities.
          </p>
        </section>

        <section class="container py-5">
          <h2 class="text-center mb-5 display-5 fw-bold">What We Do</h2>

          <div class="row g-4">
            <div class="col-md-6 ">
              <div class="card shadow-sm h-100 border-0 bg-light">
                <div class="card-body">
                  <h4 class="card-title text-success mb-3">
                    <i class="bi bi-tree-fill me-2"></i>Environment & Ecology
                  </h4>
                  <ul class="list-unstyled">
                    <li>
                      <strong>Conservation Initiatives:</strong> Revitalizing
                      traditional water bodies, safeguarding forest areas, and
                      restoring wild horticulture to ensure the Western Ghats
                      continue to be a pillar of ecological balance.
                    </li>
                    <li class="mt-2">
                      <strong>Sustainable Farming:</strong> Inspiring local
                      farmers to embrace organic farming practices and soil
                      health management, bridging the gap between age-old
                      traditions and modern environmental practices.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card shadow-sm h-100 border-0 bg-light">
                <div class="card-body">
                  <h4 class="card-title text-primary mb-3">
                    <i class="bi bi-book-fill me-2"></i>Education
                  </h4>
                  <ul class="list-unstyled">
                    <li>
                      <strong>Empowering the Next Generation:</strong> Providing
                      bicycles to remote tribal students and integrating moral
                      education into curricula.
                    </li>
                    <li class="mt-2">
                      <strong>Shikshan Sakhi Program:</strong> Mentorship and
                      guidance for female graduation students.
                    </li>
                    <li class="mt-2">
                      <strong>Digital Literacy:</strong> Providing basic
                      computer education in Western Ghat schools.
                    </li>
                    <li class="mt-2">
                      <strong>Moral Education:</strong> Supporting students
                      struggling with addiction through values-based education.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card shadow-sm h-100 border-0 bg-light">
                <div class="card-body">
                  <h4 class="card-title text-danger mb-3">
                    <i class="bi bi-gender-female me-2"></i>Women Empowerment
                  </h4>
                  <ul class="list-unstyled">
                    <li>
                      <strong>Entrepreneurship & Capacity Building:</strong>{" "}
                      Training, skill-building, and tools for rural women
                      entrepreneurs.
                    </li>
                    <li class="mt-2">
                      <strong>Health and Wellness:</strong> Women’s health camps
                      and awareness programs fostering well-being and
                      solidarity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card shadow-sm h-100 border-0 bg-light">
                <div class="card-body">
                  <h4 class="card-title text-warning mb-3">
                    <i class="bi bi-people-fill me-2"></i>Tribal Development
                  </h4>
                  <ul class="list-unstyled">
                    <li>
                      <strong>Cultural Heritage & Skill Integration:</strong>{" "}
                      Blending traditional knowledge with modern vocational
                      skills for tribal resilience.
                    </li>
                    <li class="mt-2">
                      <strong>Sustainable Livelihoods:</strong> Micro-financing,
                      market linkages, and custom skill development for tribal
                      communities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container py-5">
          <h2 class="text-center mb-4 display-5 fw-bold">Our Impact</h2>

          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="card shadow-sm border-0 p-4">
                <div class="card-body">
                  <p class="lead mb-3">
                    Since our establishment under the Indian Trust Act in{" "}
                    <strong>2019</strong>, we have directly touched the lives of
                    over <strong>2,500 individuals</strong> through carefully
                    curated interventions.
                  </p>
                  <p class="lead mb-3">
                    Our <strong>digital outreach</strong> and{" "}
                    <strong>social media campaigns</strong> have further
                    amplified this impact, educating and engaging thousands more
                    on the themes of{" "}
                    <span class="text-success">sustainability</span>,{" "}
                    <span class="text-primary">education</span>, and{" "}
                    <span class="text-danger">empowerment</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container py-5">
          <h2 class="text-center mb-4 display-5 fw-bold">The Way Forward</h2>

          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="card shadow-sm border-0 p-4 mb-4">
                <div class="card-body">
                  <p class="lead">
                    Our journey is just beginning. Looking ahead,{" "}
                    <strong>SOIL Foundation</strong> is set to intensify efforts
                    in:
                  </p>
                  <ul class="list-unstyled ps-3">
                    <li class="mb-2">
                      <i class="bi bi-droplet-half text-primary me-2"></i>
                      <strong>Protecting the Western Ghats:</strong> Focusing on
                      conserving small and medium-scale wild water bodies.
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-person-fill-up text-danger me-2"></i>
                      <strong>Boosting Women Entrepreneurship:</strong>{" "}
                      Expanding training and business support programs to
                      nurture local women leaders.
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-mortarboard-fill text-success me-2"></i>
                      <strong>Revolutionizing Education:</strong> Deepening our
                      support for girl child education and extending our reach
                      to areas that need it most.
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-globe2 text-warning me-2"></i>
                      <strong>Enhancing Tribal Development:</strong> Launching
                      tailored initiatives to preserve indigenous knowledge,
                      build sustainable livelihoods, and empower tribal
                      communities through integrated capacity-building and
                      market access programs.
                    </li>
                  </ul>
                  <p class="mt-4 mb-0">
                    Every step we take is designed to build a more{" "}
                    <strong>inclusive, resilient, and harmonious future</strong>{" "}
                    for all living beings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container py-5">
          <h2 class="text-center mb-4 display-5 fw-bold">Get Involved</h2>

          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="card shadow-sm border-0 p-4 text-center">
                <div class="card-body">
                  <p class="lead mb-4">
                    Join us on our journey toward{" "}
                    <strong>sustainable change</strong>. Whether you're a{" "}
                    <span class="text-success">volunteer</span>, a{" "}
                    <span class="text-primary">partner</span>, or simply curious
                    about our work, connect with us and be a part of a future
                    where{" "}
                    <strong>people and the planet flourish together</strong>.
                  </p>

                  <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
                    <a href="#contact" class="btn btn-outline-primary btn-lg">
                      <i class="bi bi-person-plus-fill me-2"></i>Become a
                      Volunteer
                    </a>
                    <a
                      href="#partnership"
                      class="btn btn-outline-success btn-lg"
                    >
                      <i class="bi bi-handshake-fill me-2"></i>Partner With Us
                    </a>
                    <a href="#newsletter" class="btn btn-outline-dark btn-lg">
                      <i class="bi bi-envelope-fill me-2"></i>Stay Updated
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
