// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import bannerImage from '../images/OurWorkBanner.png';
// import Education from '../images/7.png';
// import organicFarming from '../images/organic_farming.jpg';
// import womenEmpowerment from '../images/women_impowerment.jpeg';
// import Water from '../images/water_conservation.jpeg';
// import Ecology from '../images/slide3.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function OurWorkPage() {
//   return (

//     <>
//       <div style={{ position: 'relative' }}>
//         <img
//           src={bannerImage}
//           alt="Banner"
//           style={{
//             width: '100%',
//             height: '250px',
//             maxHeight: '500px',
//             objectFit: 'revert'
//           }}
//         />
//         {/* Container for the overlay text */}
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '10%', // Position text near top
//             right: '5%',
//             textAlign: 'right',
//             color: '#fff',
//             fontFamily: 'Times new roman, Noto serif devnagri',
//             fontWeight: 'bold',
//           }}
//         >
//           {/* Main Title */}
//           <h1
//             style={{
//               fontSize: '2.5rem',
//               fontWeight: '900',
//               margin: 0,
//             }}
//           >
//             Our Work
//           </h1>
//         </div>
//       </div>


//       <Container className="py-4" style={{ maxWidth: '900px' }}>
//         {/* Areas of Operations */}
//         <section id="areasOfWork" className="mb-5">
//           <h2 className="section-heading text-center mb-4" style={{ color: '#496907', fontFamily: 'Times new roman, Noto serif devnagri', fontSize: '1.9rem', fontWeight: '900' }}>
//             Area of Operations
//           </h2>

//           {/* 1) Education and Enterprise Development */}
//           <Row className="mb-5">
//             <Col md={6} className="text-center">
//               <img src={Education} alt="Education and Enterprise Development" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
//             </Col>
//             <Col md={6} className="mb-3">
//               <h4 className="fw-bold" style={{ fontFamily: 'Times new roman, Noto serif devnagri' }}>Education and Enterprise Development</h4>
//               <p style={{ textAlign: 'justify', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//                 SOIL Foundation believes in building resilient communities through targeted
//                 education and enterprise development. We empower individuals with the knowledge
//                 and skills necessary to achieve economic independence and improve their quality
//                 of life. Our programs focus on providing access to quality education and
//                 equipping individuals with the entrepreneurial tools necessary to create and
//                 manage successful ventures. By nurturing both intellectual and economic growth,
//                 we aim to unlock potential, drive innovation, and cultivate lasting prosperity
//                 within the regions we serve.
//               </p>
//             </Col>
//           </Row>

//           {/* 2) Women Empowerment & Nutrition Security */}
//           <Row className="mb-5">
//             <Col md={6} className="order-md-2 text-center">
//               <img src={womenEmpowerment} alt="Women Empowerment" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
//             </Col>
//             <Col md={6} className="order-md-1 mb-3">
//               <h4 className="fw-bold" style={{ fontFamily: 'Times new roman, Noto serif devnagri' }}>Women Empowerment & Nutrition Security</h4>
//               <p style={{ textAlign: 'justify', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//                 At SOIL, we're dedicated to empowering women through practical, life-changing
//                 initiatives. In Uttarkannada district, we've provided 1,000 women with
//                 'nutrition garden kits,' directly combating anemia and improving nutrition
//                 security. In Mysore, our livelihood counseling sessions equip women SHG members
//                 with the tools they need to thrive. We also foster financial independence
//                 through comprehensive literacy programs, covering budgeting, savings, credit,
//                 and digital banking, empowering women to build secure futures.
//               </p>
//             </Col>
//           </Row>

//           {/* 3) Environment and Ecology */}
//           <Row className="mb-5">
//             <Col md={6} className="text-center">
//               <img src={Ecology} alt="Environment and Ecology" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
//             </Col>
//             <Col md={6} className="mb-3">
//               <h4 className="fw-bold" style={{ fontFamily: 'Times new roman, Noto serif devnagri' }}>Environment and Ecology</h4>
//               <p style={{ textAlign: 'justify', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//                 SOIL Foundation is deeply committed to safeguarding our natural environment
//                 and fostering ecological balance. Through targeted initiatives, we address
//                 critical environmental challenges, promoting sustainable practices and
//                 restoring vital ecosystems. Our work encompasses projects aimed at conserving
//                 biodiversity, improving water resource management, and mitigating the impacts
//                 of climate change. We believe in empowering communities to become stewards
//                 of their environment, fostering a deeper understanding of ecological principles
//                 and supporting sustainable livelihood practices that harmonize with nature.
//               </p>
//             </Col>
//           </Row>

//           {/* 4) Organic and Advanced Farming */}
//           <Row className="mb-5">
//             <Col md={6} className="order-md-2 text-center">
//               <img src={organicFarming} alt="Organic and Advanced Farming" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
//             </Col>
//             <Col md={6} className="order-md-1 mb-3">
//               <h4 className="fw-bold" style={{ fontFamily: 'Times new roman, Noto serif devnagri' }}>Organic and Advanced Farming</h4>
//               <p style={{ textAlign: 'justify', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//                 SOIL Foundation is cultivating a new era of sustainable agriculture in Mysore
//                 district. We've empowered approximately 550 farmers across Periyapatna, Hunsur,
//                 and Nanjanagudu blocks with in-depth training and hands-on farm demonstrations.
//                 Our programs emphasize organic and advanced farming techniques, equipping
//                 farmers with the knowledge to improve yields while nurturing the land.
//               </p>
//             </Col>
//           </Row>

//           {/* 5) Conservation of Wild Water Bodies */}
//           <Row className="mb-5">
//             <Col md={6} className="text-center">
//               <img src={Water} alt="Conservation of Wild Waterbodies" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
//             </Col>
//             <Col md={6} className="mb-3">
//               <h4 className="fw-bold" style={{ fontFamily: 'Times new roman, Noto serif devnagri' }}>Conservation of Wild Waterbodies</h4>
//               <p style={{ textAlign: 'justify', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//                 SOIL Foundation champions the vital role of wild waterbodies in the Western
//                 Ghats ecosystem. We empower farmers residing in the region's foothills with
//                 the knowledge and skills necessary for effective conservation, maintenance,
//                 and rehabilitation. Through expert-led training in Sirsi and Siddapur blocks,
//                 Uttarkannada district, we've fostered a deeper understanding of these crucial
//                 resources. Recognizing the interconnectedness of soil and water health, we
//                 also provide hands-on training and demonstrations on paddy field bund
//                 construction, a critical technique for controlling soil erosion and
//                 safeguarding these precious water sources.
//               </p>
//             </Col>
//           </Row>
//         </section>

//         {/* Impact Section */}
//         <section id="impact" className="mb-5">
//           <h2 className="section-heading text-center mb-4" style={{ fontFamily: 'Times new roman, Noto serif devnagri', fontSize: '1.9rem', fontWeight: '900' }}>
//             Impact
//           </h2>
//           <p style={{ textAlign: 'justify', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//             SOIL Foundation's diverse interventions have directly transformed the lives of 2,500 individuals, creating 
//             tangible change within communities. Beyond direct impact, our strategic use of social media and other 
//             platforms has amplified awareness on critical issues, extending our reach and influence to a broader 
//             audience.
//           </p>
//         </section>

//         {/* Objectives */}
//         <section id="objectives" className="mb-5">
//           <h2 className="section-heading text-center mb-4" style={{ fontFamily: 'Times new roman, Noto serif devnagri', fontSize: '1.9rem', fontWeight: '900' }}>
//             Objectives
//           </h2>
//           <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//             <strong>Conserving Natural Resources and Ecological Rehabilitation:</strong>
//             <ul>
//               <li>SOIL aims to protect and preserve natural resources, including native herbs, plants, water bodies, and 
//               forest areas. By doing so, they contribute to ecological balance and biodiversity.</li>
//               <li>The organization focuses on restoring damaged or degraded ecological aspects. This includes reviving 
//               traditional water bodies, promoting wild horticulture, and revitalizing traditional farming systems.</li>
//             </ul>
//           </p>
//           <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//             <strong>Promoting Organic Farming to Support Farming Communities:</strong>
//             <ul>
//               <li>SOIL facilitates access to both forward and backward linkages for farmers. These linkages encompass 
//                 financial assistance, as well as non-financial support, to enhance agricultural productivity and 
//                 sustainability.</li>
//               <li>The organization motivates and assists farmers in transitioning to organic farming practices. Organic 
//                 methods contribute to soil health, reduce chemical inputs, and promote environmental well-being.</li>
//             </ul>
//           </p>
//           <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', fontFamily: 'Times new roman, Noto serif devnagri' }}>
//             <strong>Community Organization and Women Empowerment:</strong>
//             <ul>
//               <li>SOIL works to organize and empower unorganized communities. By improving their standard of living, 
//                 they contribute to overall community well-being.</li>
//             </ul>
//           </p>
//         </section>
//       </Container>
//     </>
    
//   );
// }

// export default OurWorkPage;

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

          {/* Education and Enterprise Development */}
          <Row className="mb-5">
            <Col md={6} className="text-center">
              <img src={Education} alt="Education and Enterprise Development" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
            <Col md={6} className="mb-3">
              <h4 className="fw-bold" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>Education and Enterprise Development</h4>
              <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
                SOIL Foundation believes in building resilient communities through targeted
                education and enterprise development. We empower individuals with the knowledge
                and skills necessary to achieve economic independence and improve their quality
                of life. Our programs focus on providing access to quality education and
                equipping individuals with the entrepreneurial tools necessary to create and
                manage successful ventures. By nurturing both intellectual and economic growth,
                we aim to unlock potential, drive innovation, and cultivate lasting prosperity
                within the regions we serve.
              </p>
            </Col>
          </Row>

          {/* Women Empowerment & Nutrition Security */}
          <Row className="mb-5">
            <Col md={6} className="order-md-2 text-center">
              <img src={womenEmpowerment} alt="Women Empowerment" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
            <Col md={6} className="order-md-1 mb-3">
              <h4 className="fw-bold" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>Women Empowerment & Nutrition Security</h4>
              <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
                At SOIL, we're dedicated to empowering women through practical, life-changing
                initiatives. In Uttarkannada district, we've provided 1,000 women with
                'nutrition garden kits,' directly combating anemia and improving nutrition
                security. In Mysore, our livelihood counseling sessions equip women SHG members
                with the tools they need to thrive. We also foster financial independence
                through comprehensive literacy programs, covering budgeting, savings, credit,
                and digital banking, empowering women to build secure futures.
              </p>
            </Col>
          </Row>

          {/* Environment and Ecology */}
          <Row className="mb-5">
            <Col md={6} className="text-center">
              <img src={Ecology} alt="Environment and Ecology" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
            <Col md={6} className="mb-3">
              <h4 className="fw-bold" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>Environment and Ecology</h4>
              <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
                SOIL Foundation is deeply committed to safeguarding our natural environment
                and fostering ecological balance. Through targeted initiatives, we address
                critical environmental challenges, promoting sustainable practices and
                restoring vital ecosystems. Our work encompasses projects aimed at conserving
                biodiversity, improving water resource management, and mitigating the impacts
                of climate change. We believe in empowering communities to become stewards
                of their environment, fostering a deeper understanding of ecological principles
                and supporting sustainable livelihood practices that harmonize with nature.
              </p>
            </Col>
          </Row>

          {/* Organic and Advanced Farming */}
          <Row className="mb-5">
            <Col md={6} className="order-md-2 text-center">
              <img src={organicFarming} alt="Organic and Advanced Farming" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
            <Col md={6} className="order-md-1 mb-3">
              <h4 className="fw-bold" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>Organic and Advanced Farming</h4>
              <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
                SOIL Foundation is cultivating a new era of sustainable agriculture in Mysore
                district. We've empowered approximately 550 farmers across Periyapatna, Hunsur,
                and Nanjanagudu blocks with in-depth training and hands-on farm demonstrations.
                Our programs emphasize organic and advanced farming techniques, equipping
                farmers with the knowledge to improve yields while nurturing the land.
              </p>
            </Col>
          </Row>

          {/* Conservation of Wild Water Bodies */}
          <Row className="mb-5">
            <Col md={6} className="text-center">
              <img src={Water} alt="Conservation of Wild Waterbodies" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
            </Col>
            <Col md={6} className="mb-3">
              <h4 className="fw-bold" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>Conservation of Wild Waterbodies</h4>
              <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
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
            </Col>
          </Row>
        </section>

        {/* Impact Section */}
        <section id="impact" className="mb-5">
          <h2 className="section-heading text-center mb-4" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri', fontSize: '1.9rem', fontWeight: '900' }}>
            Impact
          </h2>
          <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
            SOIL Foundation's diverse interventions have directly transformed the lives of 2,500 individuals, creating 
            tangible change within communities. Beyond direct impact, our strategic use of social media and other 
            platforms has amplified awareness on critical issues, extending our reach and influence to a broader 
            audience.
          </p>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="mb-5">
          <h2 className="section-heading text-center mb-4" style={{ fontFamily: 'Times New Roman, Noto Serif Devnagri', fontSize: '1.9rem', fontWeight: '900' }}>
            Objectives
          </h2>
          <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
            <strong>Conserving Natural Resources and Ecological Rehabilitation:</strong>
            <ul>
              <li>SOIL aims to protect and preserve natural resources, including native herbs, plants, water bodies, and 
              forest areas. By doing so, they contribute to ecological balance and biodiversity.</li>
              <li>The organization focuses on restoring damaged or degraded ecological aspects. This includes reviving 
              traditional water bodies, promoting wild horticulture, and revitalizing traditional farming systems.</li>
            </ul>
          </p>
          <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
            <strong>Promoting Organic Farming to Support Farming Communities:</strong>
            <ul>
              <li>SOIL facilitates access to both forward and backward linkages for farmers. These linkages encompass 
                financial assistance, as well as non-financial support, to enhance agricultural productivity and 
                sustainability.</li>
              <li>The organization motivates and assists farmers in transitioning to organic farming practices. Organic 
                methods contribute to soil health, reduce chemical inputs, and promote environmental well-being.</li>
            </ul>
          </p>
          <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '0 auto', fontFamily: 'Times New Roman, Noto Serif Devnagri' }}>
            <strong>Community Organization and Women Empowerment:</strong>
            <ul>
              <li>SOIL works to organize and empower unorganized communities. By improving their standard of living, 
                they contribute to overall community well-being.</li>
            </ul>
          </p>
        </section>
      </Container>
    </>
  );
}

export default OurWorkPage;