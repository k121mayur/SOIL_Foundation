// src/pages/HomePage.jsx
import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Replace with your own banner image


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
            objectFit: 'cover',
          }}
        />
        {/* Container for the overlay text */}
        <div
          style={{
            position: 'absolute',
            top: '10%',             // Position text near top
            left: '50%',
            transform: 'translateX(-50%)', 
            textAlign: 'center',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)', // Subtle shadow for readability
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
              color: '#00534A',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            Join us in Creating Sustainable Change!!!
          </h2>
        </div>
      </div>

      {/* Western Ghats Section */}
      <div style={{ margin: '40px auto', maxWidth: '800px' }}>
        <h2
          className="section-heading"
          style={{ textAlign: 'center', fontSize: '1.9rem', fontWeight: '900' }}
        >
          Western Ghats : The Green Jewel Of India 🌿🏔️
        </h2>
        <p>
          The Western Ghats, a UNESCO World Heritage Site and a mesmerizing and critically
          important biodiversity hotspot, is a guardian of ecological and environmental
          balance in India. Stretching approximately 1,600 kilometers across Maharashtra,
          Goa, Karnataka, Kerala, and Tamil Nadu, along the western coast, this majestic
          mountain range harbors an astounding diversity of life. The Western Ghats is home
          to over 7,400 species of flora and fauna and the source of mighty rivers like the
          Narmada, Tapti, Godavari, Krishna, and Kaveri that carve their way through rugged
          terrain nourishing life and land.
        </p>
      </div>

      {/* Challenges Faced by Western Ghats */}
      <div style={{ margin: '40px auto', maxWidth: '800px' }}>
        <h2
          className="section-heading"
          style={{ textAlign: 'center', fontSize: '1.9rem', fontWeight: '900' }}
        >
          Challenges Faced By Western Ghats
        </h2>
        <p>
          The Western Ghats are under critical strain. Deforestation, mining, and encroachment,
          unscientific forest product collection coupled with poor resource management, are
          rapidly eroding this vital ecosystem. This results in habitat loss, alarming biodiversity
          decline, and crippling water scarcity, directly impacting the livelihoods of local
          communities.
        </p>
      </div>

      <div style={{ color: '#496907', margin: '40px auto', maxWidth: '800px' }}>
        <strong>
          Recognizing the Western Ghats' vital ecological role, SOIL Foundation dedicates itself
          to its protection through sustainable and conservation-focused programs.
        </strong>
      </div>

      {/* Three Featured Images (Programmes) */}
      <div style={{ margin: '40px auto', maxWidth: '800px' }}>
        {/* Centered Heading */}
        <h2
          className="section-heading"
          style={{ textAlign: 'center', fontSize: '1.9rem', fontWeight: '900' }}
        >
          Programmes
        </h2>

        {/* Container for the 3 images in a row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '20px',
          }}
        >
          {/* 1st Box */}
          <div style={{ textAlign: 'center' }}>
            <img
              /*src={Img path}*/
              alt="Organic Farming"
              style={{ width: '300px', height: '350px' }}
            />
            <p
              style={{
                marginTop: '10px',
                fontWeight: 'bold',
                color: '#496907',
              }}
            >
              Education and Enterprise Development
            </p>
          </div>

          {/* 2nd Box */}
          <div style={{ textAlign: 'center' }}>
            <img
              /*src={Img path}*/
              alt="Women Empowerment"
              style={{ width: '300px', height: '350px' }}
            />
            <p
              style={{
                marginTop: '10px',
                fontWeight: 'bold',
                color: '#496907',
              }}
            >
              Women Empowerment & Nutrition Security
            </p>
          </div>

          {/* 3rd Box */}
          <div style={{ textAlign: 'center' }}>
            <img
              /*src={Img path}*/
              alt="Conservation of Water Bodies"
              style={{ width: '300px', height: '350px' }}
            />
            <p
              style={{
                marginTop: '10px',
                fontWeight: 'bold',
                color: '#496907',
              }}
            >
              Environment and Ecology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
