import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLeaf,
  FaHandsHelping,
  FaQuoteLeft,
  FaGraduationCap,
  FaSeedling,
  FaWater,
  FaUsers,
  FaFemale,
  FaHandshake,
  FaEnvelope,
  FaUserPlus,
  FaCompass,
  FaAward,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";

// Image Assets
import bannerImage from "../assets/WesternGhat.jpg";
import directorPhoto from "../assets/vinayashree_ceo.jpg";
import tribalBorderArt from "../assets/tribal_border_art.png";
import tribalStripPattern from "../assets/tribal_strip_pattern.png";
import conservationImg from "../assets/conservation.jpg";
import womenImg from "../assets/women.jpg";
import tribalDevImg from "../assets/Tribal Development.jpg";
import eduImg from "../images/7.png";

// Soil Artworks
import artSupport from "../assets/soil_art/IMG-20250304-WA0016.jpg";

// Styles
import "./AboutUsPage.css";

gsap.registerPlugin(ScrollTrigger);

function AboutUsPage() {
  const mainRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero atmospheric reveal
      gsap.fromTo(
        ".about-hero-bg",
        { scale: 1.12 },
        { scale: 1.04, duration: 2.2, ease: "power2.out" }
      );

      gsap.fromTo(
        ".about-hero-reveal",
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

  // Pillars of What We Do (Verbatim existing content from current page)
  const whatWeDoPillars = [
    {
      id: "ecology",
      title: "Environment & Ecology",
      icon: <FaSeedling size={16} />,
      image: conservationImg,
      caption: "Western Ghats Ecological Harmony",
      items: [
        {
          title: "Conservation Initiatives:",
          desc: "Revitalizing traditional water bodies, safeguarding forest areas, and restoring wild horticulture to ensure the Western Ghats continue to be a pillar of ecological balance.",
        },
        {
          title: "Sustainable Farming:",
          desc: "Inspiring local farmers to embrace organic farming practices and soil health management, bridging the gap between age-old traditions and modern environmental practices.",
        },
      ],
    },
    {
      id: "education",
      title: "Education",
      icon: <FaGraduationCap size={16} />,
      image: eduImg,
      caption: "Empowering Rural & Tribal Aspirations",
      items: [
        {
          title: "Empowering the Next Generation:",
          desc: "Providing bicycles to remote tribal students and integrating moral education into curricula.",
        },
        {
          title: "Shikshan Sakhi Program:",
          desc: "Mentorship and guidance for female graduation students.",
        },
        {
          title: "Digital Literacy:",
          desc: "Providing basic computer education in Western Ghat schools.",
        },
        {
          title: "Moral Education:",
          desc: "Supporting students struggling with addiction through values-based education.",
        },
      ],
    },
    {
      id: "women",
      title: "Women Empowerment",
      icon: <FaFemale size={16} />,
      image: womenImg,
      caption: "Self-Reliance & Livelihood Dignity",
      items: [
        {
          title: "Entrepreneurship & Capacity Building:",
          desc: "Training, skill-building, and tools for rural women entrepreneurs.",
        },
        {
          title: "Health and Wellness:",
          desc: "Women’s health camps and awareness programs fostering well-being and solidarity.",
        },
      ],
    },
    {
      id: "tribal",
      title: "Tribal Development",
      icon: <FaUsers size={16} />,
      image: tribalDevImg,
      caption: "Indigenous Heritage & Sustainable Resiliency",
      items: [
        {
          title: "Cultural Heritage & Skill Integration:",
          desc: "Blending traditional knowledge with modern vocational skills for tribal resilience.",
        },
        {
          title: "Sustainable Livelihoods:",
          desc: "Micro-financing, market linkages, and custom skill development for tribal communities.",
        },
      ],
    },
  ];

  return (
    <div className="soil-about-wrapper" ref={mainRef}>
      {/* ===================================================================
          1. HERO SECTION (Full-bleed Western Ghats Editorial Banner)
      =================================================================== */}
      <section className="about-hero-fullscreen">
        <img
          src={bannerImage}
          alt="Western Ghats Landscape"
          className="about-hero-bg"
        />
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-hero-eyebrow about-hero-reveal">
            CIVIL SOCIETY ORGANIZATION • EST. 2019
          </span>

          <h1 className="about-hero-title about-hero-reveal">
            ABOUT US
          </h1>

          <p className="about-hero-tagline about-hero-reveal">
            SOIL Foundation — Supporting Optimal Improvement of Lives
          </p>
        </div>
      </section>

      {/* Trust & Compliance Ribbon */}
      <div className="about-trust-bar">
        <Container>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              <span>Indian Trust Act 2019</span>
            </div>
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              <span>80G & 12A Certified</span>
            </div>
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              <span>NGO Darpan Compliant</span>
            </div>
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              <span>CSR-1 Certified</span>
            </div>
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              <span>Tata-Dhan Academy Network</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ===================================================================
          2. WHO WE ARE (Illustrated Background with Central Divider & Mockup Design)
      =================================================================== */}
      <section id="whoarewe" className="about-who-section">
        <Container fluid="xl" className="px-lg-5 px-3">
          <Row className="gy-5 position-relative align-items-stretch">
            {/* Left Column: Eyebrow, Who We Are, Statement, Badges & Open Artwork space */}
            <Col lg={5} className="d-flex flex-column">
              <div className="who-left-content">
                {/* Vertical line marker + Eyebrow */}
                <div className="who-eyebrow-wrap">
                  <span className="who-eyebrow-bar" />
                  <span className="who-eyebrow-text">FOUNDATIONAL IDENTITY</span>
                </div>

                {/* Main Heading */}
                <h2 className="who-main-heading">
                  Who We Are
                </h2>

                {/* Primary Statement */}
                <p className="who-statement-lead">
                  SOIL Foundation is an ambitious civil society organization founded
                  by young development professionals in 2019 under the Indian Trust
                  Act.
                </p>

                {/* Compliance Badges matching mockup rows */}
                <div className="who-badge-container">
                  <div className="who-badge-row">
                    <span className="who-pill-badge">
                      <FaAward className="who-badge-icon" />
                      <span>80G COMPLIANT</span>
                    </span>
                    <span className="who-pill-badge">
                      <FaAward className="who-badge-icon" />
                      <span>12A CERTIFIED</span>
                    </span>
                    <span className="who-pill-badge">
                      <FaAward className="who-badge-icon" />
                      <span>NGO DARPAN</span>
                    </span>
                  </div>
                  <div className="who-badge-row">
                    <span className="who-pill-badge">
                      <FaAward className="who-badge-icon" />
                      <span>CSR-1 CERTIFIED</span>
                    </span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Central Divider with terracotta node (Desktop) */}
            <Col lg={1} className="d-none d-lg-flex who-central-divider-col">
              <div className="who-central-line">
                <span className="who-central-dot" />
              </div>
            </Col>

            {/* Right Column: Dynamic Team & Numbered Ledger */}
            <Col lg={6}>
              <div className="who-right-content">
                <h3 className="who-team-heading">
                  A Dynamic Team with Local Roots and an Educational Edge
                </h3>

                <p className="who-team-desc">
                  Our team is a vibrant blend of experienced development
                  professionals and dedicated education experts, all committed to
                  transformative community impact. We bring expertise in:
                </p>

                <div className="who-ledger-divider" />

                {/* Item 01 */}
                <div className="who-ledger-item">
                  <div className="who-ledger-num-col">
                    <span className="who-ledger-num">01</span>
                    <span className="who-ledger-hairline" />
                  </div>
                  <div className="who-ledger-body">
                    <h4 className="who-ledger-title">
                      Community Mobilization & Natural Resource Conservation
                    </h4>
                    <p className="who-ledger-text">
                      Spearheading initiatives that actively engage local
                      communities and preserve our environment.
                    </p>
                  </div>
                </div>

                <div className="who-ledger-divider" />

                {/* Item 02 */}
                <div className="who-ledger-item">
                  <div className="who-ledger-num-col">
                    <span className="who-ledger-num">02</span>
                    <span className="who-ledger-hairline" />
                  </div>
                  <div className="who-ledger-body">
                    <h4 className="who-ledger-title">
                      Sustainable Agriculture & Traditional Farming Systems
                    </h4>
                    <p className="who-ledger-text">
                      Advancing methods that honour timeless farming practices
                      while promoting eco-friendly innovations.
                    </p>
                  </div>
                </div>

                <div className="who-ledger-divider" />

                {/* Item 03 */}
                <div className="who-ledger-item">
                  <div className="who-ledger-num-col">
                    <span className="who-ledger-num">03</span>
                    <span className="who-ledger-hairline" />
                  </div>
                  <div className="who-ledger-body">
                    <h4 className="who-ledger-title">
                      Institutional Management & Innovative Project Implementation
                    </h4>
                    <p className="who-ledger-text">
                      Guiding scalable, impactful interventions that drive
                      sustainable change.
                    </p>
                  </div>
                </div>

                <div className="who-ledger-divider" />

                {/* Item 04 */}
                <div className="who-ledger-item">
                  <div className="who-ledger-num-col">
                    <span className="who-ledger-num">04</span>
                    <span className="who-ledger-hairline" />
                  </div>
                  <div className="who-ledger-body">
                    <h4 className="who-ledger-title">
                      Education & Capacity Building
                    </h4>
                    <p className="who-ledger-text">
                      Our education experts design cutting-edge learning initiatives
                      and tailored training programs to empower communities.
                      Graduates of the esteemed Tata-Dhan Academy in Madurai, our
                      founders and experts combine local insights with global best
                      practices to create interventions that are both impactful and
                      enduring.
                    </p>
                    <div className="mt-2">
                      <span className="ledger-tata-tag">
                        <FaCompass size={11} />
                        Tata-Dhan Academy Madurai Alumni
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Decorative Tribal Pattern Strip */}
      <div className="tribal-divider-wrap">
        <img
          src={tribalStripPattern}
          alt="Tribal art border strip"
          className="tribal-divider-img"
        />
      </div>

      {/* ===================================================================
          3. VISION & MISSION (Visually Connected Manifesto Section)
      =================================================================== */}
      <section className="about-vm-section">
        <Container>
          {/* Eyebrow & Header */}
          <div className="text-center mb-5">
            <span className="eyebrow-tag">GUIDING COMPASS & PURPOSE</span>
            <h2 className="about-section-heading">
              Vision & Mission
            </h2>
            <div className="decorative-divider center" />
          </div>

          {/* Connected Manifesto Spread */}
          <div className="manifesto-spread">
            <Row className="g-0 align-items-stretch">
              {/* Vision Column */}
              <Col lg={6} id="vision" className="manifesto-col">
                <div className="manifesto-tag">
                  <FaLeaf size={13} style={{ color: "#344B38" }} />
                  <span>Guiding Horizon</span>
                </div>

                <h3 className="manifesto-heading">VISION</h3>

                <div className="manifesto-quote">
                  “We envision a future where every individual thrives.”
                </div>

                <p className="manifesto-body">
                  We envision a future where every individual thrives—guided by
                  quality education, a preserved natural environment, empowered
                  women leading change, and tribal communities confidently
                  navigating modern challenges.
                </p>

                <div className="manifesto-pills">
                  <span>Quality Education</span>
                  <span>Preserved Natural Environment</span>
                  <span>Empowered Women</span>
                  <span>Tribal Self-Reliance</span>
                </div>
              </Col>

              {/* Mission Column */}
              <Col lg={6} id="missions" className="manifesto-col">
                <div className="manifesto-tag">
                  <FaHandsHelping size={13} style={{ color: "#344B38" }} />
                  <span>On-Ground Mandate</span>
                </div>

                <h3 className="manifesto-heading">MISSION</h3>

                <div className="manifesto-quote">
                  “Igniting transformative progress across the Western Ghats.”
                </div>

                <p className="manifesto-body">
                  At SOIL Foundation, we ignite transformative progress across the
                  Western Ghats by fusing cutting-edge educational innovations with
                  dedicated environmental restoration, alongside targeted
                  empowerment initiatives for women and tribal communities.
                </p>

                <div className="manifesto-pills">
                  <span>Educational Innovations</span>
                  <span>Environmental Restoration</span>
                  <span>Targeted Empowerment</span>
                  <span>Western Ghats Stewardship</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          4. WHAT WE DO (Interactive Editorial Showcase)
      =================================================================== */}
      <section id="what-we-do" className="about-what-we-do-section">
        <Container>
          <div className="text-center mb-5">
            <span className="eyebrow-tag">ACTION & INTERVENTION</span>
            <h2 className="about-section-heading">
              What We Do
            </h2>
            <div className="decorative-divider center" />
          </div>

          {/* Interactive Navigation Pills */}
          <div className="what-tabs-wrap">
            {whatWeDoPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`what-tab-btn ${activeTab === idx ? "active" : ""}`}
              >
                <span className="what-tab-num">0{idx + 1}.</span>
                <span>{pillar.title}</span>
              </button>
            ))}
          </div>

          {/* Interactive Showcase Panel */}
          {(() => {
            const currentPillar = whatWeDoPillars[activeTab];
            return (
              <div className="what-showcase-panel">
                <Row className="g-0 align-items-stretch">
                  {/* Left Column: Authentic Photography */}
                  <Col lg={5} className="what-showcase-img-col">
                    <img
                      src={currentPillar.image}
                      alt={currentPillar.title}
                      className="what-showcase-img"
                    />
                    <div className="what-showcase-caption">
                      <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", fontStyle: "italic" }}>
                        {currentPillar.caption}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontFamily: "'Inter', sans-serif",
                          color: "#B99A76",
                        }}
                      >
                        Field Action
                      </span>
                    </div>
                  </Col>

                  {/* Right Column: Editorial Initiatives */}
                  <Col lg={7} className="what-showcase-content">
                    <div className="what-showcase-title">
                      {currentPillar.icon}
                      <span>{currentPillar.title}</span>
                    </div>

                    <div className="initiative-editorial-list">
                      {currentPillar.items.map((item, i) => (
                        <div key={i} className="initiative-editorial-item">
                          <h4 className="initiative-editorial-title">
                            {item.title}
                          </h4>
                          <p className="initiative-editorial-desc">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })()}
        </Container>
      </section>

      {/* ===================================================================
          5. OUR IMPACT (Deep Green Botanical Foliage & Golden Accent Cards)
      =================================================================== */}
      <section id="impact" className="about-impact-section">
        <Container className="about-impact-container">
          {/* Eyebrow & Title */}
          <div className="impact-header-wrap text-center">
            <span className="impact-eyebrow">
              MEASURABLE GROUNDWORK
            </span>
            <h2 className="about-section-heading impact-main-heading">
              Our Impact
            </h2>
          </div>

          {/* Editorial Quote */}
          <p className="impact-quote-lead">
            “Since our establishment under the Indian Trust Act in 2019, we have
            directly touched the lives of over 2,500 individuals through carefully
            curated interventions.”
          </p>

          {/* Statistics Grid */}
          <Row className="g-4 justify-content-center">
            {/* Stat 1: 2019 */}
            <Col lg={4} md={6}>
              <div className="impact-oversized-card">
                <div className="impact-oversized-num">
                  <span
                    className="stat-counter-value"
                    data-target="2019"
                    data-commas="false"
                  >
                    2019
                  </span>
                </div>
                <div className="impact-oversized-label">FOUNDING YEAR</div>
                <p className="impact-oversized-sub">
                  Established under the Indian Trust Act with 80G &amp; 12A certification.
                </p>
              </div>
            </Col>

            {/* Stat 2: 2,500+ */}
            <Col lg={4} md={6}>
              <div className="impact-oversized-card">
                <div className="impact-oversized-num">
                  <span
                    className="stat-counter-value"
                    data-target="2500"
                    data-commas="true"
                  >
                    2,500
                  </span>
                  <span className="impact-oversized-accent">+</span>
                </div>
                <div className="impact-oversized-label">LIVES DIRECTLY TOUCHED</div>
                <p className="impact-oversized-sub">
                  Individuals transformed through carefully curated on-ground interventions.
                </p>
              </div>
            </Col>

            {/* Stat 3: 1,000s+ */}
            <Col lg={4} md={6}>
              <div className="impact-oversized-card">
                <div className="impact-oversized-num">
                  <span>1,000</span>
                  <span className="impact-oversized-accent">s+</span>
                </div>
                <div className="impact-oversized-label">DIGITAL OUTREACH REACH</div>
                <p className="impact-oversized-sub">
                  Engaged and educated through digital and social media campaigns.
                </p>
              </div>
            </Col>
          </Row>

          {/* Thin Horizontal Divider Line */}
          <div className="impact-divider-line" />

          {/* Thematic Pillars of Impact */}
          <div className="impact-pillars-summary">
            <span className="impact-pillar-badge">
              <FaSeedling size={15} />
              <span>Sustainability</span>
            </span>
            <span className="impact-pillar-badge">
              <FaGraduationCap size={15} />
              <span>Education</span>
            </span>
            <span className="impact-pillar-badge">
              <FaFemale size={15} />
              <span>Empowerment</span>
            </span>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          6. THE WAY FORWARD (Future Horizons Full-Width Section)
      =================================================================== */}
      <section id="the-way-forward" className="about-way-forward-section">
        <Container>
          <div className="text-center mb-4">
            <span className="eyebrow-tag">STRATEGIC HORIZONS</span>
            <h2 className="about-section-heading">
              The Way Forward
            </h2>
            <div className="decorative-divider center" />
          </div>

          <p className="way-forward-intro">
            “Our journey is just beginning. Looking ahead, SOIL Foundation is set
            to intensify efforts in:”
          </p>

          {/* 4 Horizons Grid (Editorial layout instead of repetitive cards) */}
          <div className="horizons-grid">
            {/* Horizon 1 */}
            <div className="horizon-editorial-item">
              <div>
                <div className="horizon-top-meta">
                  <span className="horizon-chip">HORIZON 01 // ECOLOGY</span>
                  <div className="horizon-icon-wrap">
                    <FaWater size={16} />
                  </div>
                </div>
                <h4 className="horizon-title">Protecting the Western Ghats</h4>
              </div>
              <p className="horizon-desc">
                Focusing on conserving small and medium-scale wild water bodies.
              </p>
            </div>

            {/* Horizon 2 */}
            <div className="horizon-editorial-item">
              <div>
                <div className="horizon-top-meta">
                  <span className="horizon-chip">HORIZON 02 // LIVELIHOODS</span>
                  <div className="horizon-icon-wrap">
                    <FaFemale size={16} />
                  </div>
                </div>
                <h4 className="horizon-title">Boosting Women Entrepreneurship</h4>
              </div>
              <p className="horizon-desc">
                Expanding training and business support programs to nurture local
                women leaders.
              </p>
            </div>

            {/* Horizon 3 */}
            <div className="horizon-editorial-item">
              <div>
                <div className="horizon-top-meta">
                  <span className="horizon-chip">HORIZON 03 // LEARNING</span>
                  <div className="horizon-icon-wrap">
                    <FaGraduationCap size={16} />
                  </div>
                </div>
                <h4 className="horizon-title">Revolutionizing Education</h4>
              </div>
              <p className="horizon-desc">
                Deepening our support for girl child education and extending our
                reach to areas that need it most.
              </p>
            </div>

            {/* Horizon 4 */}
            <div className="horizon-editorial-item">
              <div>
                <div className="horizon-top-meta">
                  <span className="horizon-chip">HORIZON 04 // HERITAGE</span>
                  <div className="horizon-icon-wrap">
                    <FaUsers size={16} />
                  </div>
                </div>
                <h4 className="horizon-title">Enhancing Tribal Development</h4>
              </div>
              <p className="horizon-desc">
                Launching tailored initiatives to preserve indigenous knowledge,
                build sustainable livelihoods, and empower tribal communities
                through integrated capacity-building and market access programs.
              </p>
            </div>
          </div>

          {/* Closing Horizon Manifesto */}
          <div className="way-forward-closing-manifesto">
            <FaQuoteLeft
              size={24}
              style={{ color: "#B99A76", marginBottom: "1rem" }}
            />
            <p className="way-forward-closing-quote">
              “Every step we take is designed to build a more inclusive,
              resilient, and harmonious future for all living beings.”
            </p>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          7. CHIEF EXECUTIVE OFFICER & TEAM (Editorial Leadership)
      =================================================================== */}
      <section id="bod" className="about-leadership-section">
        <Container>
          <div className="text-center mb-5">
            <span className="eyebrow-tag">STEWARDSHIP & LEADERSHIP</span>
            <h2 className="about-section-heading">
              Chief Executive Officer
            </h2>
            <div className="decorative-divider center" />
          </div>

          {/* CEO Editorial Feature */}
          <div className="ceo-editorial-spread">
            <Row className="align-items-center gy-4">
              <Col lg={4} className="text-center">
                <div className="ceo-portrait-wrap">
                  <img
                    src={directorPhoto}
                    alt="Mrs. Vinayashree Gaonkar, CEO"
                    className="ceo-portrait-img"
                  />
                  <div className="ceo-badge-floating">
                    Leadership
                  </div>
                </div>
              </Col>

              <Col lg={8}>
                <span className="ceo-role-tag">EXECUTIVE LEADERSHIP</span>
                <h3 className="ceo-name">Mrs. Vinayashree Gaonkar</h3>
                <div className="ceo-pull-quote">
                  “Empowering communities through grassroots action, collaborative
                  leadership, and enduring ecological stewardship.”
                </div>
                <p className="ceo-bio">
                  As Chief Executive Officer of SOIL Foundation, Mrs. Vinayashree
                  Gaonkar guides the organization's overarching vision and strategic
                  interventions across the Western Ghats. Dedicated to empowering
                  marginalized communities, her leadership harmonizes environmental
                  conservation with women's empowerment, educational advancement,
                  and sustainable grassroots enterprise.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <span className="compliance-badge-item">
                    <FaLeaf size={11} />
                    <span>Ecological Stewardship</span>
                  </span>
                  <span className="compliance-badge-item">
                    <FaHandsHelping size={11} />
                    <span>Community Mobilization</span>
                  </span>
                  <span className="compliance-badge-item">
                    <FaFemale size={11} />
                    <span>Women Leadership</span>
                  </span>
                </div>
              </Col>
            </Row>
          </div>

          {/* Team Section */}
          <div id="team" className="team-editorial-box">
            <span className="eyebrow-tag">COLLECTIVE CAPACITY</span>
            <h3 className="about-section-heading" style={{ fontSize: "clamp(2.2rem, 3.2vw, 2.9rem)" }}>
              Team
            </h3>
            <div className="decorative-divider center" />

            <p className="team-narrative-text">
              SOIL operates with an expert team proficient in community
              mobilization, natural resource conservation, livelihood enterprise
              development, women’s empowerment, microfinance, financial literacy,
              human resource development, and management of Farmer’s Producers
              Organizations (FPOs).
            </p>

            {/* Multidisciplinary Expertise Chips */}
            <div className="team-domains-grid">
              <div className="team-domain-chip">
                <FaUsers size={13} />
                <span>Community Mobilization</span>
              </div>
              <div className="team-domain-chip">
                <FaLeaf size={13} />
                <span>Natural Resource Conservation</span>
              </div>
              <div className="team-domain-chip">
                <FaBriefcase size={13} />
                <span>Livelihood Enterprise Development</span>
              </div>
              <div className="team-domain-chip">
                <FaFemale size={13} />
                <span>Women’s Empowerment</span>
              </div>
              <div className="team-domain-chip">
                <FaChartLine size={13} />
                <span>Microfinance</span>
              </div>
              <div className="team-domain-chip">
                <FaAward size={13} />
                <span>Financial Literacy</span>
              </div>
              <div className="team-domain-chip">
                <FaHandshake size={13} />
                <span>Human Resource Development</span>
              </div>
              <div className="team-domain-chip">
                <FaSeedling size={13} />
                <span>Management of FPOs</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Traditional Folk Art Divider */}
      <div className="tribal-divider-wrap" style={{ backgroundColor: "#F5F1E8" }}>
        <img
          src={tribalBorderArt}
          alt="SOIL Folk Art Border"
          className="tribal-divider-img"
        />
      </div>

      {/* ===================================================================
          8. GET INVOLVED (Strong Editorial CTA Navigation)
      =================================================================== */}
      <section id="get-involved" className="about-get-involved-section">
        <Container>
          <div className="get-involved-banner">
            <img
              src={artSupport}
              alt="Community Art"
              className="get-involved-art-watermark"
            />
            <Row className="position-relative" style={{ zIndex: 2 }}>
              <Col lg={9}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#B99A76",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  CALL TO SOLIDARITY
                </span>

                <h2
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                    color: "#F5F1E8",
                    lineHeight: 1.15,
                    marginBottom: "1rem",
                  }}
                >
                  Get Involved
                </h2>

                <p className="get-involved-quote">
                  “Where people and the planet flourish together.”
                </p>

                <p className="get-involved-lead">
                  Join us on our journey toward <strong>sustainable change</strong>.
                  Whether you're a volunteer, a partner, or simply curious about our
                  work, connect with us and be a part of a future where people and
                  the planet flourish together.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <HashLink
                    to="/contact#opinionForm"
                    className="btn-soil-light"
                    style={{ textDecoration: "none" }}
                  >
                    <FaUserPlus size={13} />
                    <span>Become a Volunteer</span>
                  </HashLink>

                  <HashLink
                    to="/contact#opinionForm"
                    className="btn-soil-outline"
                    style={{
                      borderColor: "rgba(245, 241, 232, 0.55)",
                      color: "#F5F1E8",
                      textDecoration: "none",
                    }}
                  >
                    <FaHandshake size={13} />
                    <span>Partner With Us</span>
                  </HashLink>

                  <HashLink
                    to="/contact#opinionForm"
                    className="btn-soil-outline"
                    style={{
                      borderColor: "rgba(245, 241, 232, 0.55)",
                      color: "#F5F1E8",
                      textDecoration: "none",
                    }}
                  >
                    <FaEnvelope size={13} />
                    <span>Stay Updated</span>
                  </HashLink>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AboutUsPage;
