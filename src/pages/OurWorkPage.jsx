import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImage from '../images/OurWorkBanner.png';
import Education from '../images/7.png';
import organicFarming from '../images/organic_farming.jpg';
import womenEmpowerment from '../images/women_impowerment.jpeg';
import Water from '../images/water_conservation.jpeg';
import Ecology from '../images/slide3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function OurWorkPage() {
  return (
    <>
      {/* Banner Section */}
      <div style={{ position: 'relative' }}>
        <img
          src={bannerImage}
          alt="Banner"
          style={{
            width: '100%',
            height: '250px',
            maxHeight: '500px',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            textAlign: 'right',
            color: '#fff',
            fontFamily: 'Times New Roman, Noto Serif Devnagri',
            fontWeight: 'bold',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              margin: 0,
            }}
          >
            Our Work
          </h1>
        </div>
      </div>

      <Container className="py-4" style={{ maxWidth: '900px' }}>
        {/* Areas of Operations Section */}
        <section id="areasOfWork" className="mb-5">
          <h2 className="section-heading text-center mb-4" style={{ color: '#496907', fontFamily: 'Times New Roman, Noto Serif Devnagri', fontSize: '1.9rem', fontWeight: '900' }}>
            Areas of Operations
          </h2>
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

        {/* Impact Section */}
        <section id="impact" className="mb-5">
          <h2 className="section-heading text-center mb-4" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri', fontSize: '1.9rem', fontWeight: '900' }}>
            Impact
          </h2>
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

        

      </Container>
    </>
  );
}

export default OurWorkPage;