// src/pages/OurWorkPage.jsx
import React from 'react';
import organicFarming from '../assets/organic.jpg';
import womenEmpowerment from '../assets/women.jpg';
import conservation from '../assets/conservation.jpg';

function OurWorkPage() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Areas of Operations */}
      <section id="areasOfWork" style={{ margin: '0 auto', maxWidth: '900px' }}>
      <h2
        className="section-heading"
        style={{ textAlign: 'center', fontSize: '1.9rem', fontWeight: '900' }}
      >
        Area of Operations
      </h2>

      {/* 1) Education and Enterprise Development */}
      <div className="work-section">
        <div className="text-container">
          <h4 style={{ color: '#496907', fontWeight: 'bold' }}>
            Education and Enterprise Development
          </h4>
          <p>
            SOIL Foundation believes in building resilient communities through targeted
            education and enterprise development. We empower individuals with the knowledge
            and skills necessary to achieve economic independence and improve their quality
            of life. Our programs focus on providing access to quality education and
            equipping individuals with the entrepreneurial tools necessary to create and
            manage successful ventures. By nurturing both intellectual and economic growth,
            we aim to unlock potential, drive innovation, and cultivate lasting prosperity
            within the regions we serve.
          </p>
        </div>
        <img src={organicFarming} alt="Education and Enterprise Development" />
      </div>

      {/* 2) Women Empowerment & Nutrition Security */}
      <div className="work-section">
        <div className="text-container">
          <h4 style={{ color: '#496907', fontWeight: 'bold' }}>
            Women Empowerment & Nutrition Security
          </h4>
          <p>
            At SOIL, we're dedicated to empowering women through practical, life-changing
            initiatives. In Uttarkannada district, we've provided 1,000 women with
            'nutrition garden kits,' directly combating anemia and improving nutrition
            security. In Mysore, our livelihood counseling sessions equip women SHG members
            with the tools they need to thrive. We also foster financial independence
            through comprehensive literacy programs, covering budgeting, savings, credit,
            and digital banking, empowering women to build secure futures.
          </p>
        </div>
        <img src={womenEmpowerment} alt="Women Empowerment" />
      </div>

      {/* 3) Environment and Ecology */}
      <div className="work-section">
        <div className="text-container">
          <h4 style={{ color: '#496907', fontWeight: 'bold' }}>Environment and Ecology</h4>
          <p>
            SOIL Foundation is deeply committed to safeguarding our natural environment
            and fostering ecological balance. Through targeted initiatives, we address
            critical environmental challenges, promoting sustainable practices and
            restoring vital ecosystems. Our work encompasses projects aimed at conserving
            biodiversity, improving water resource management, and mitigating the impacts
            of climate change. We believe in empowering communities to become stewards
            of their environment, fostering a deeper understanding of ecological principles
            and supporting sustainable livelihood practices that harmonize with nature.
          </p>
        </div>
        <img src={conservation} alt="Environment and Ecology" />
      </div>

      {/* 4) Organic and Advanced Farming */}
      <div className="work-section">
        <div className="text-container">
          <h4 style={{ color: '#496907', fontWeight: 'bold' }}>Organic and Advanced Farming</h4>
          <p>
            SOIL Foundation is cultivating a new era of sustainable agriculture in Mysore
            district. We've empowered approximately 550 farmers across Periyapatna, Hunsur,
            and Nanjanagudu blocks with in-depth training and hands-on farm demonstrations.
            Our programs emphasize organic and advanced farming techniques, equipping
            farmers with the knowledge to improve yields while nurturing the land.
          </p>
        </div>
        <img src={organicFarming} alt="Organic and Advanced Farming" />
      </div>

      {/* 5) Conservation of Wild Water Bodies */}
      <div className="work-section">
        <div className="text-container">
          <h4 style={{ color: '#496907', fontWeight: 'bold' }}>
            Conservation of Wild Waterbodies
          </h4>
          <p>
            SOIL Foundation champions the vital role of wild waterbodies in the Western
            Ghats ecosystem. We empower farmers residing in the region's foothills with
            the knowledge and skills necessary for effective conservation, maintenance,
            and rehabilitation. Through expert-led training in Sirsi and Siddapur blocks,
            Uttarkannada district, we've fostered a deeper understanding of these crucial
            resources. Recognizing the interconnectedness of soil and water health, we
            also provide hands-on training and demonstrations on paddy field bund
            construction, a critical technique for controlling soil erosion and
            safeguarding these precious water sources.
          </p>
        </div>
        <img src={conservation} alt="Conservation of Wild Waterbodies" />
      </div>
    </section>

      {/* Impact Section (if needed) */}
      <section id="impact" style={{ margin: '0 auto', maxWidth: '900px'}}>
        <h2 className="section-heading" style={{textAlign: 'center',fontSize: '1.9rem', fontWeight: '900'}}>Impact</h2>
        <p>
          SOIL Foundation's diverse interventions have directly transformed the lives of 2,500 individuals, creating 
          tangible change within communities. Beyond direct impact, our strategic use of social media and other 
          platforms has amplified awareness on critical issues, extending our reach and influence to a broader 
          audience.
        </p>
      </section>

      {/* Objectives */}
      <section id="objectives" style={{ marginTop: '40px' }}>
        <h2 className="section-heading" style={{textAlign: 'center',fontSize: '1.9rem', fontWeight: '900'}}>Objectives</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          <strong>Conserving Natural Resources and Ecological Rehabilitation:</strong>
          <ul style={{ textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
            <li>SOIL aims to protect and preserve natural resources, including native herbs, plants, water bodies, and 
            forest areas. By doing so, they contribute to ecological balance and biodiversity.</li>
            <li>The organization focuses on restoring damaged or degraded ecological aspects. This includes reviving 
            traditional water bodies, promoting wild horticulture, and revitalizing traditional farming systems. </li>
          </ul>
        </p>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          <strong>Promoting Organic Farming to Support Farming Communities: </strong>
          <ul style={{ textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
            <li>SOIL facilitates access to both forward and backward linkages for farmers. These linkages encompass 
              financial assistance, as well as non-financial support, to enhance agricultural productivity and 
              sustainability
            </li>
            <li>The organization motivates and assists farmers in transitioning to organic farming practices. Organic 
              methods contribute to soil health, reduce chemical inputs, and promote environmental well-being.
            </li>
          </ul>
        </p>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          <strong>Community Organization and women Empowerment:</strong>
          <ul style={{ textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
            <li>SOIL works to organize and empower unorganized communities. By improving their standard of living, 
              they contribute to overall community well-being.
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default OurWorkPage;
