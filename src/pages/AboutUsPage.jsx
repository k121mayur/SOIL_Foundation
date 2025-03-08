// src/pages/AboutUsPage.jsx
import React from 'react';
import directorPhoto from '../assets/profile_icon.png'; // Replace with your actual image

function AboutUsPage() {
  return (
    <div style={{ padding: '20px' }}>
      {/* About Organization Section */}
      <section
        id="whoarewe"
        style={{
          margin: '0 auto 40px',
          maxWidth: '1000px',
          textAlign: 'center'
        }}
      >
        <h2
          className="section-heading"
          style={{ fontSize: '1.9rem', fontWeight: '900', marginBottom: '20px' }}
        >
          About Organization
        </h2>
        <p style={{ textAlign: 'justify' }}>
          SOIL (Supporting Optimal Improvement of Lives) is vision brought to life by passionate
          young professionals, living the principle of 'giving back to society'. Witnessing the
          mounting threats of deforestation, mining, and unsustainable practices in the Western
          Ghats, our founders—development professionals from Tata-Dhan Academy—established SOIL to
          safeguard this vital ecosystem and its communities. We are committed to fostering a
          balanced environment where all living beings are treated equally, promoting sustainable
          livelihoods, and empowering farmers to embrace traditional, organic agriculture.
          Registered in Sirsi, Karnataka, SOIL is dedicated to building a resilient future for the
          Western Ghats.
        </p>
      </section>

      {/* Vision Card */}
      <section
        id="vision"
        className="about-card bg-light-green"
        style={{
          margin: '0 auto 40px',
          maxWidth: '1000px',
          padding: '20px'
        }}
      >
        <h3
          className="section-heading"
          style={{ textAlign: 'center', marginTop: '0', fontSize: '1.9rem', fontWeight: '900' }}
        >
          VISION
        </h3>
        <p style={{ textAlign: 'justify' }}>
          Empowering Lives, Nurturing Nature: Our vision is to create a harmonious world where all
          living beings thrive together. Through sustainable practices, community development, and
          conservation efforts, we envision a future where humanity coexists with nature, fostering
          balance and well-being.
        </p>
      </section>

      {/* Missions Card */}
      <section
        id="missions"
        className="about-card bg-light-green"
        style={{
          margin: '0 auto 40px',
          maxWidth: '1000px',
          padding: '20px'
        }}
      >
        <h3
          className="section-heading"
          style={{ textAlign: 'center', marginTop: '0', fontSize: '1.9rem', fontWeight: '900' }}
        >
          MISSIONS
        </h3>
        <ul style={{ textAlign: 'justify' }}>
          <li>
            <strong>Demonstrating Giving Back:</strong> We actively demonstrate the theory of giving back to society,
            addressing impending threats faced by all living beings.
          </li>
          <li><strong>Sustainable Practices:</strong> We champion sustainable practices that preserve ecological balance.</li>
          <li>
          <strong>Equitable Service:</strong> Our distinctive feature lies in treating all living beings equally
            while fostering a balanced environment.
          </li>
          <li>
          <strong>Resource Conservation:</strong> We conserve natural resources, promote livelihoods, and encourage
            traditional and organic agriculture.
          </li>
        </ul>
      </section>

      {/* Board of Directors */}
      <section
        id="bod"
        style={{
          margin: '40px 0',
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <h2
          className="section-heading"
          style={{
            color: 'black',
            textAlign: 'center',
            marginTop: '0',
            fontSize: '2rem',
            fontWeight: '900'
          }}
        >
          Board Of Directors
        </h2>
        <hr style={{ width: '200px', margin: '0 auto 30px' }} />

        {/* Row 1: Two Cards */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6">
            <div
              className="director-card mx-auto"
              style={{
                maxWidth: '500px',
                textAlign: 'left'
              }}
            >
              <img
                src={directorPhoto}
                alt="Director"
                className="director-photo"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  float: 'left',
                  marginRight: '15px',
                  borderRadius: '50%'
                }}
              />
              <h5>Mr. Narayan Hegde</h5>
              <p>President</p>
              <p>Contact: 8762456114 / 8309221660</p>
              <p>Mail: nanihegde09@gmail.com</p>
              <p>
                Address: S/O Balakrishna Hegde, #63, Muski Village, Vanalli Panchayat, Tal. Sirsi,
                Dist. Uttara Kannada, 581336
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div
              className="director-card mx-auto"
              style={{
                maxWidth: '500px',
                textAlign: 'left'
              }}
            >
              <img
                src={directorPhoto}
                alt="Director"
                className="director-photo"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  float: 'left',
                  marginRight: '15px',
                  borderRadius: '50%'
                }}
              />
              <h5>Mrs. Vinayashree Gaonkar</h5>
              <p>Secretary</p>
              <p>Contact: 9480556719 / 6360284426</p>
              <p>Mail: vinugaonkar96@gmail.com</p>
              <p>
                Address: D/O Shivaram Gaonkar, #57, Beegar, Vajralli Post, Tal. Yellapur, Dist.
                Uttara Kannada, 581337
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Single Card in Center */}
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div
              className="director-card"
              style={{
                maxWidth: '500px',
                textAlign: 'left'
              }}
            >
              <img
                src={directorPhoto}
                alt="Director"
                className="director-photo"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  float: 'left',
                  marginRight: '15px',
                  borderRadius: '50%'
                }}
              />
              <h5>Mr. Paresh Hegde</h5>
              <p>Treasurer</p>
              <p>Contact: 7892865369</p>
              <p>Mail: pareshshegde@gmail.com</p>
              <p>
                Address: S/O Sooryanarayana Hedge, #117, Belagundli, Tarehalli, Shigemane,
                Ummachgi Panchayat, Tal. Yellapur, Dist. Uttara Kannada, 581347
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Team */}
      <section
        id="team"
        className="about-card bg-light-green"
        style={{
          margin: '0 auto 40px',
          maxWidth: '1000px',
          padding: '20px'
        }}
      >
        <h2
          className="section-heading"
          style={{
            textAlign: 'center',
            marginTop: '0',
            fontSize: '1.9rem',
            fontWeight: '900'
          }}
        >
          Team
        </h2>
        <p style={{ textAlign: 'justify', margin: '0' }}>
          SOIL operates with an expert team proficient in community mobilization, natural resource
          conservation, livelihood enterprise development, women’s empowerment, microfinance,
          financial literacy, human resource development, and management of Farmer’s Producers
          Organizations (FPOs).
        </p>
      </section>
    </div>
  );
}

export default AboutUsPage;
