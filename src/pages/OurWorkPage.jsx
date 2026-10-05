import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaSeedling,
  FaFemale,
  FaGraduationCap,
  FaUsers,
  FaArrowRight,
  FaQuoteLeft,
  FaHome,
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaGlobeAmericas,
} from "react-icons/fa";

// Image Assets
import bannerImage from "../assets/WesternGhat.jpg";
import conservationImg from "../assets/conservation.jpg";
import womenImg from "../assets/women.jpg";
import tribalDevImg from "../assets/Tribal Development.jpg";
import eduImg from "../images/7.png";

// Soil Foundation Authentic Artworks from "Soil Foundation images"
import artEcologyProtect from "../assets/soil_art/IMG-20250304-WA0011.jpg";
import artEmpower from "../assets/soil_art/IMG-20250304-WA0007.jpg";
import artEducation from "../assets/soil_art/IMG-20250304-WA0001.jpg";
import artTribal from "../assets/soil_art/IMG-20250304-WA0003.jpg";

// Styles
import "./OurWorkPage.css";

gsap.registerPlugin(ScrollTrigger);

function OurWorkPage() {
  const mainRef = useRef(null);
  const [activePillar, setActivePillar] = useState(0);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero atmospheric reveal
      gsap.fromTo(
        ".work-hero-bg",
        { scale: 1.12 },
        { scale: 1.04, duration: 2.2, ease: "power2.out" }
      );

      gsap.fromTo(
        ".work-hero-reveal",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.18, ease: "power3.out" }
      );

      // Impact Counter Animation
      gsap.utils.toArray(".stat-counter-value").forEach((statEl) => {
        const target = parseInt(statEl.getAttribute("data-target"), 10);
        const hasCommas = statEl.getAttribute("data-commas") === "true";

        gsap.fromTo(
          statEl,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statEl,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            snap: { innerText: 1 },
            onUpdate: function () {
              const currentVal = Math.floor(this.targets()[0].innerText);
              if (hasCommas) {
                this.targets()[0].innerText = currentVal.toLocaleString();
              } else {
                this.targets()[0].innerText = currentVal;
              }
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Handle hash scrolling on page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  // Programmatic Pillars of Operation Data (from HomePage & verified grassroots records)
  const operationPillars = [
    {
      id: "ecology",
      number: "01",
      title: "Ecological Conservation",
      tagline: "Restoring ecosystems and nurturing Western Ghats biodiversity",
      icon: <FaSeedling size={18} />,
      badge: "Western Ghats Biodiversity",
      description:
        "SOIL works to protect and restore ecosystems across Karnataka, with a strong focus on conserving the ecologically rich Western Ghats. Our initiatives include conservation of natural and wild water bodies, promotion of organic and sustainable farming practices, responsible forest management, and community-led efforts to protect and nurture local ecosystems.",
      image: conservationImg,
      artImage: artEcologyProtect,
      artCaption: "Protecting Earth & Life Harmony",
      initiatives: [
        {
          name: "Green School Initiative – Planting the Fruitful Future",
          quote: "From digging the pit to enjoying the fruit — learning, nurturing and growing with nature.",
          details:
            "Nurturing environmental awareness among children by taking them beyond one-day plantation drives and involving them in the complete journey of fruit-bearing and horticultural trees—from digging the pit to planting, nurturing and enjoying the fruit.",
        },
        {
          name: "Nursery Development Programme",
          quote: "Growing livelihoods while nurturing nature.",
          details:
            "Promotes nature-based livelihoods by engaging women SHG members in learning practical skills related to raising and caring for plants. Community plant nurseries generate sustainable income while greening the environment.",
        },
        {
          name: "Climate Literacy Programme",
          quote: "Learn. Act. Lead. — empowering young climate leaders for a sustainable future.",
          details:
            "Equipping youth aged 10–21 with knowledge, skills, and confidence to become active contributors to environmental solutions through interactive learning, hands-on climate action, and community engagement.",
        },
        {
          name: "Conservation Initiatives & Water Revitalization",
          quote: "Safeguarding sacred lifelines across Western Ghats catchments.",
          details:
            "Revitalizing traditional water bodies, safeguarding fragile forest zones, and restoring wild horticulture to ensure the Western Ghats continue to serve as a pillar of ecological balance.",
        },
        {
          name: "Sustainable Farming & Soil Health",
          quote: "Bridging age-old agricultural traditions with modern ecological sciences.",
          details:
            "Inspiring local farmers to embrace organic farming practices, bio-inputs, and participatory soil health management, preserving biodiversity and groundwater.",
        },
      ],
    },
    {
      id: "women",
      number: "02",
      title: "Women Empowerment",
      tagline: "Building economic independence, self-reliance, and health dignity",
      icon: <FaFemale size={18} />,
      badge: "Livelihood & Health Dignity",
      description:
        "SOIL supports women to become confident, skilled and economically independent through entrepreneurship development, capacity building and sustainable livelihood opportunities. Our initiatives also promote health and well-being while strengthening women's leadership and participation in community development.",
      image: womenImg,
      artImage: artEmpower,
      artCaption: "Dignity, Care & Women Leadership",
      initiatives: [
        {
          name: "Menstrual Hygiene Management (MHM) Awareness Programme",
          quote: "Empowering girls with knowledge, dignity and the confidence to learn and thrive.",
          details:
            "Signature initiative supporting adolescent girls with awareness, healthy practices, sanitary products, and healthcare linkages. Eliminates menstruation-related barriers to school attendance so girls continue education with pride.",
        },
        {
          name: "Women Entrepreneurship Development Programme",
          quote: "Empowering women to turn skills and ideas into sustainable livelihoods.",
          details:
            "Enables women SHG members to start and scale micro-enterprises such as petty shops, food processing, pickle and papad making, tailoring, and home-based businesses, integrated with digital financial tools.",
        },
        {
          name: "Tailoring & Embroidery Training Programme",
          quote: "Skills that create opportunities, confidence and livelihoods.",
          details:
            "Integrates practical vocational stitching skills with financial literacy. Upon completion, participants receive essential equipment to launch independent livelihood ventures.",
        },
        {
          name: "Financial & Digital Literacy Programme",
          quote: "Building financial confidence, strengthening digital skills and enabling informed choices.",
          details:
            "Equips rural women and youth to safely utilize digital banking, manage household savings, prevent online financial fraud, and build long-term economic security.",
        },
        {
          name: "Kitchen Garden Initiative",
          quote: "Growing food, strengthening families and nurturing sustainable household practices.",
          details:
            "Provided vegetable garden kits and hands-on guidance across six Karnataka districts, enhancing household food nutrition security through low-cost, organic home farming.",
        },
      ],
    },
    {
      id: "education",
      number: "03",
      title: "Education",
      tagline: "Fostering lifelong learning, digital literacy, and civic leadership",
      icon: <FaGraduationCap size={18} />,
      badge: "Knowledge & Civic Capability",
      description:
        "SOIL Foundation promotes lifelong learning and capacity building for children, youth and adults, recognising education as a pathway to greater awareness, confidence and opportunity. Our work includes academic support, digital literacy, career guidance, improved learning environments and capacity building for community leaders.",
      image: eduImg,
      artImage: artEducation,
      artCaption: "Wisdom, Enlightenment & Youth Aspirations",
      initiatives: [
        {
          name: "Career Guidance & Mentorship",
          quote: "Helping young minds discover possibilities and build pathways to a confident future.",
          details:
            "Provides rural youth with interactive career exploration sessions, mentorship, and exposure to diverse modern career pathways, enabling them to make informed choices with confidence.",
        },
        {
          name: "Sarpanch Samvad – Digital Capacity Building",
          quote: "Enabling grassroots leaders with digital knowledge for learning, collaboration and better community engagement.",
          details:
            "In collaboration with ISRA (Institute of Social Responsibility and Accountability) and the Quality Council of India (QCI), supported digital onboarding and capacity building of elected Panchayat Presidents across Karnataka and Maharashtra.",
        },
        {
          name: "Shikshan Sakhi Program",
          quote: "Guiding young women into higher education with mentorship and resilience.",
          details:
            "Targeted mentorship, higher education coaching, and personality development for female graduation students across rural districts.",
        },
        {
          name: "Empowering the Next Generation & Digital Access",
          quote: "Eliminating travel hurdles and modernizing rural classrooms.",
          details:
            "Providing bicycles to remote tribal students to overcome daily schooling transit barriers, introducing computer literacy in Western Ghats schools, and providing values-based moral education.",
        },
      ],
    },
    {
      id: "tribal",
      number: "04",
      title: "Tribal Development",
      tagline: "Preserving indigenous heritage and expanding sustainable opportunities",
      icon: <FaUsers size={18} />,
      badge: "Indigenous Heritage & Resilience",
      description:
        "SOIL Foundation is committed to supporting the holistic development of tribal communities by strengthening traditional knowledge, cultural heritage, skills and sustainable livelihoods. We aim to promote social inclusion and improve access to essential opportunities and services, enabling tribal families to pursue greater economic independence, dignity and equal opportunities.",
      image: tribalDevImg,
      artImage: artTribal,
      artCaption: "Indigenous Harmony & Cultural Heritage",
      initiatives: [
        {
          name: "Traditional Knowledge & Forest Stewardship",
          quote: "Rooted in sacred traditions, thriving in modern times.",
          details:
            "Documenting and preserving indigenous herbal knowledge, wild seed varieties, and sustainable non-timber forest product harvesting methods to protect tribal identity.",
        },
        {
          name: "Social Inclusion & Livelihood Diversification",
          quote: "Dignified livelihoods rooted in respect and equal opportunity.",
          details:
            "Opening doors for tribal families beyond subsistence farming through vocational skill training, fair market linkages, and direct educational access for tribal children.",
        },
        {
          name: "Cultural Heritage & Skill Integration",
          quote: "Blending ancestral heritage with modern vocational resilience.",
          details:
            "Blending traditional artisanal craftsmanship with contemporary vocational tools, custom enterprise training, and micro-financing linkages tailored for tribal resilience.",
        },
      ],
    },
  ];

  const currentPillar = operationPillars[activePillar];

  return (
    <div className="soil-work-wrapper" ref={mainRef}>
      {/* ===================================================================
          1. HERO SECTION (Editorial Full-Bleed Banner)
      =================================================================== */}
      <section className="work-hero-fullscreen">
        <img
          src={bannerImage}
          alt="Western Ghats Landscape"
          className="work-hero-bg"
        />
        <div className="work-hero-overlay" />

        <div className="work-hero-content">
          <span className="work-hero-eyebrow work-hero-reveal">
            GRASSROOTS INTERVENTIONS • KARNATAKA &amp; WESTERN GHATS
          </span>

          <h1 className="work-hero-title work-hero-reveal">
            OUR WORK
          </h1>

          <p className="work-hero-tagline work-hero-reveal">
            Nurturing Nature • Empowering Communities • Building Resilient Lives
          </p>

          <div className="work-hero-actions work-hero-reveal">
            <HashLink to="/work#areasOfWork" className="btn-soil-primary">
              <span>Explore Areas of Operations</span>
              <FaArrowRight size={12} />
            </HashLink>
            <HashLink to="/work#impact" className="btn-soil-outline-light">
              <span>View Measurable Impact</span>
            </HashLink>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. TRUST & COMPLIANCE BAR
      =================================================================== */}
      <div className="work-trust-bar">
        <Container>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="work-trust-pill">
              <span className="work-trust-pill-dot" />
              <span>Indian Trust Act 2019</span>
            </div>
            <div className="work-trust-pill">
              <span className="work-trust-pill-dot" />
              <span>80G &amp; 12A Certified</span>
            </div>
            <div className="work-trust-pill">
              <span className="work-trust-pill-dot" />
              <span>NGO Darpan Compliant</span>
            </div>
            <div className="work-trust-pill">
              <span className="work-trust-pill-dot" />
              <span>CSR-1 Certified</span>
            </div>
            <div className="work-trust-pill">
              <span className="work-trust-pill-dot" />
              <span>Tata-Dhan Academy Network</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ===================================================================
          3. AREAS OF OPERATIONS SECTION (#areasOfWork)
      =================================================================== */}
      <section id="areasOfWork" className="work-areas-section">
        {/* Support #areas alias anchor for seamless navigation */}
        <div id="areas" style={{ position: 'relative', top: '-110px' }} />

        <Container className="work-areas-container">
          {/* Header */}
          <div className="work-areas-header">
            <span className="eyebrow-tag">PROGRAMMATIC FOOTPRINT</span>
            <h2 className="work-section-heading">Areas of Operations</h2>
            <div className="decorative-divider center" />
            <p className="work-areas-lead">
              Grounded in the ecologically sensitive Western Ghats of Karnataka, SOIL
              Foundation operates across four interconnected domains to protect fragile ecosystems,
              strengthen community self-reliance, and nurture locally owned solutions.
            </p>
          </div>

          {/* Interactive Domain Navigation Tabs */}
          <div className="work-tabs-wrap">
            {operationPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`work-tab-btn ${activePillar === idx ? "active" : ""}`}
                aria-label={`Select ${pillar.title}`}
              >
                <span className="work-tab-num">{pillar.number}</span>
                <span>{pillar.icon}</span>
                <span>{pillar.title}</span>
              </button>
            ))}
          </div>

          {/* Active Domain Showcase Panel */}
          <div className="work-showcase-panel">
            <Row className="g-0">
              {/* Left Column: Visuals & Authentic Community Art */}
              <Col lg={5} className="work-showcase-img-col">
                <div className="work-showcase-img-wrap">
                  <img
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    className="work-showcase-img"
                  />
                </div>

                {/* Authentic SOIL Art Archive Badge */}
                <div className="work-art-badge">
                  <img
                    src={currentPillar.artImage}
                    alt={currentPillar.artCaption}
                    className="work-art-thumb"
                  />
                  <div>
                    <div className="work-art-caption">
                      {currentPillar.artCaption}
                    </div>
                    <span className="work-art-archive-label">
                      Original SOIL Art Archive
                    </span>
                  </div>
                </div>
              </Col>

              {/* Right Column: Narrative & Key Initiatives */}
              <Col lg={7} className="work-showcase-content">
                <span className="work-showcase-domain-badge">
                  DOMAIN {currentPillar.number} • {currentPillar.badge}
                </span>

                <h3 className="work-showcase-title">
                  {currentPillar.title}
                </h3>

                <div className="work-showcase-tagline">
                  “{currentPillar.tagline}”
                </div>

                <p className="work-showcase-desc">
                  {currentPillar.description}
                </p>

                <div className="work-initiatives-heading">
                  <span>Key Initiatives &amp; Programmatic Models</span>
                </div>

                <div className="work-initiatives-list">
                  {currentPillar.initiatives.map((init, i) => (
                    <div key={i} className="work-initiative-card">
                      <div className="work-initiative-title">
                        {init.name}
                      </div>
                      <div className="work-initiative-quote">
                        “{init.quote}”
                      </div>
                      <p className="work-initiative-details">
                        {init.details}
                      </p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          4. OUR IMPACT SECTION (#impact)
          Stats: 18,500 Families | 415+ Villages | 11 Projects | 10 Districts | 2 States
      =================================================================== */}
      <section id="impact" className="work-impact-section">
        <Container className="work-impact-container">
          {/* Eyebrow & Title */}
          <div className="work-impact-header">
            <span className="work-impact-eyebrow">MEASURABLE GROUNDWORK</span>
            <h2 className="work-impact-heading">Our Impact</h2>
          </div>

          {/* Lead Quote */}
          <p className="work-impact-lead-quote">
            “Since our establishment under the Indian Trust Act in 2019, we have directly touched the
            lives of over 18,500 families across 415+ villages through carefully curated interventions.”
          </p>

          {/* 5 Stats Cards Grid */}
          <Row className="g-4 justify-content-center">
            {/* Stat 1: 18,500 Families */}
            <Col lg={4} md={6}>
              <div className="work-stat-card">
                <FaUsers size={28} className="work-stat-icon" />
                <div className="work-stat-num">
                  <span
                    className="stat-counter-value"
                    data-target="18500"
                    data-commas="true"
                  >
                    18,500
                  </span>
                  <span className="work-stat-accent">+</span>
                </div>
                <div className="work-stat-label">Families Empowered</div>
                <p className="work-stat-sub">
                  Households supported through sustainable livelihood, health dignity, and conservation initiatives.
                </p>
              </div>
            </Col>

            {/* Stat 2: 415+ Villages */}
            <Col lg={4} md={6}>
              <div className="work-stat-card">
                <FaHome size={28} className="work-stat-icon" />
                <div className="work-stat-num">
                  <span
                    className="stat-counter-value"
                    data-target="415"
                    data-commas="false"
                  >
                    415
                  </span>
                  <span className="work-stat-accent">+</span>
                </div>
                <div className="work-stat-label">Villages Reached</div>
                <p className="work-stat-sub">
                  Grassroots rural and tribal habitations across Karnataka and Western Ghats ecosystems.
                </p>
              </div>
            </Col>

            {/* Stat 3: 11 Projects */}
            <Col lg={4} md={6}>
              <div className="work-stat-card">
                <FaProjectDiagram size={28} className="work-stat-icon" />
                <div className="work-stat-num">
                  <span
                    className="stat-counter-value"
                    data-target="11"
                    data-commas="false"
                  >
                    11
                  </span>
                </div>
                <div className="work-stat-label">Active Projects</div>
                <p className="work-stat-sub">
                  Dedicated multi-year programs spanning ecology, women, youth education, and indigenous welfare.
                </p>
              </div>
            </Col>

            {/* Stat 4: 10 Districts */}
            <Col lg={6} md={6}>
              <div className="work-stat-card">
                <FaMapMarkerAlt size={28} className="work-stat-icon" />
                <div className="work-stat-num">
                  <span
                    className="stat-counter-value"
                    data-target="10"
                    data-commas="false"
                  >
                    10
                  </span>
                </div>
                <div className="work-stat-label">Districts Covered</div>
                <p className="work-stat-sub">
                  Geographic reach across Uttara Kannada, Belagavi, Dharwad, and adjoining Western Ghats regions.
                </p>
              </div>
            </Col>

            {/* Stat 5: 2 States */}
            <Col lg={6} md={6}>
              <div className="work-stat-card">
                <FaGlobeAmericas size={28} className="work-stat-icon" />
                <div className="work-stat-num">
                  <span
                    className="stat-counter-value"
                    data-target="2"
                    data-commas="false"
                  >
                    2
                  </span>
                </div>
                <div className="work-stat-label">States of Operation</div>
                <p className="work-stat-sub">
                  Deep grassroots implementation and digital capacity building across Karnataka and Maharashtra.
                </p>
              </div>
            </Col>
          </Row>

          {/* Institutional Narrative Quote Box */}
          <div className="work-impact-narrative-box">
            <FaQuoteLeft
              size={24}
              style={{ color: "#CAA97E", marginBottom: "0.8rem" }}
            />
            <p className="work-impact-narrative-text">
              “Our digital outreach and community networks have amplified this impact, educating and
              engaging thousands more on sustainability, education, and empowerment.”
            </p>
            <div className="work-impact-narrative-author">
              SOIL Foundation • Nurturing Nature, Empowering Lives
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          5. CALL TO ACTION SECTION (Partner With Us)
      =================================================================== */}
      <section id="partner-cta" className="work-cta-section">
        <Container>
          <div className="work-cta-card">
            <span className="eyebrow-tag" style={{ color: "#B99A76" }}>
              JOIN OUR JOURNEY
            </span>
            <h2 className="work-cta-title">
              Partner With Us to Create Lasting Change
            </h2>
            <p className="work-cta-desc">
              Whether you are an institution, CSR partner, philanthropist, or community volunteer,
              collaborate with us to scale sustainable grassroots solutions across Karnataka and the Western Ghats.
            </p>
            <div className="work-cta-actions">
              <HashLink to="/contact" className="btn-soil-light">
                <span>Contact Our Team</span>
                <FaArrowRight size={12} />
              </HashLink>
              <HashLink to="/about#whoarewe" className="btn-soil-outline-light">
                <span>Read Our Story</span>
              </HashLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default OurWorkPage;