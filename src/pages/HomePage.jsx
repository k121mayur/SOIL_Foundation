import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLeaf,
  FaHandsHelping,
  FaArrowRight,
  FaQuoteLeft,
  FaDownload,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

// Image Assets
import bannerImage from "../assets/WesternGhat.jpg";
import tribalDev from "../assets/Tribal Development.jpg";
import conservationImg from "../assets/conservation.jpg";
import womenImg from "../assets/women.jpg";
import organicImg from "../assets/organic.jpg";
import eduImg from "../images/7.png";
import waterImg from "../images/water_conservation.jpeg";

// Soil Foundation Authentic Artworks from "Soil Foundation images"
import artHarmonize from "../assets/soil_art/IMG-20250304-WA0002.jpg";
import artNurture from "../assets/soil_art/IMG-20250304-WA0012.jpg";
import artEmpower from "../assets/soil_art/IMG-20250304-WA0007.jpg";
import artEducation from "../assets/soil_art/IMG-20250304-WA0001.jpg";
import artTribal from "../assets/soil_art/IMG-20250304-WA0003.jpg";
import artEcologyProtect from "../assets/soil_art/IMG-20250304-WA0011.jpg";
import artSupport from "../assets/soil_art/IMG-20250304-WA0016.jpg";
import artCommunity from "../assets/soil_art/IMG-20250304-WA0000.jpg";
import artResilience from "../assets/soil_art/IMG-20250304-WA0017.jpg";
import tribalBorderArt from "../assets/tribal_border_art.png";
import tribalStripPattern from "../assets/tribal_strip_pattern.png";

import "./HomePage.css";

// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const mainRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const horizontalTrackRef = useRef(null);
  const [activePillar, setActivePillar] = useState(0);

  // Who We Are & Our Story - Alternating Horizontal Compositions from /soil_art
  const whoWeAreStories = [
    {
      id: "who-we-are",
      image: "/soil_art/IMG-20250304-WA0014.jpg",
      caption: "Cradling Life • Soil and Green Sprout",
      title: "Who We Are",
      quote: "At SOIL, we work with communities, not just for them — listening, learning, and nurturing locally owned solutions.",
      description:
        "SOIL Foundation (Supporting Optimal Improvement of Lives) is an ambitious grassroots Civil Society Organization and registered public trust. Established in 2019 in the ecologically sensitive Western Ghats region of Uttara Kannada, Karnataka, SOIL was founded by young development professionals with a strong belief in giving back to society. We unite professional expertise, local knowledge, and collective action to create inclusive and sustainable solutions across Karnataka.",
      badge: "Registered Public Trust • Est. 2019",
      linkText: "Meet Our Team",
      linkHref: "/about#team",
    },
    {
      id: "our-story",
      image: "/soil_art/IMG-20250304-WA0003.jpg",
      caption: "Indigenous Heritage & Village Harmony",
      title: "Our Story",
      quote: "Saving forests requires empowering the communities and hands that inhabit them.",
      description:
        "Having grown up in the Western Ghats, the founders of SOIL Foundation developed a profound connection with its natural environment and rural communities. Over the years, they witnessed growing pressures on nature and livelihoods — deforestation, unseasonal weather, mining, and water degradation. These experiences inspired them to step forward, bridging professional development methods with generational community wisdom to build resilient livelihoods and protect fragile ecosystems.",
      badge: "Grassroots Foundational Journey",
      linkText: "Our Foundational Story",
      linkHref: "/about#whoarewe",
    },
  ];

  // Pillars of Impact Data (Derived directly from document)
  const impactPillars = [
    {
      id: "ecology",
      title: "1. Ecological Conservation",
      tagline: "Restoring ecosystems and nurturing Western Ghats biodiversity",
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
          quote: "Growing livelihoods while nurturing nature",
          details:
            "Promotes nature-based livelihoods by engaging women SHG members in learning practical skills related to raising and caring for plants. Community plant nurseries generate sustainable income while greening the environment.",
        },
        {
          name: "Climate Literacy Programme",
          quote: "Learn. Act. Lead. — empowering young climate leaders for a sustainable future.",
          details:
            "Equipping youth aged 10–21 with knowledge, skills, and confidence to become active contributors to environmental solutions through interactive learning, hands-on climate action, and community engagement.",
        },
      ],
    },
    {
      id: "women",
      title: "2. Women Empowerment",
      tagline: "Building economic independence, self-reliance, and health dignity",
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
          quote: "Empowering women to turn skills and ideas into sustainable livelihoods",
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
          quote: "Growing food, strengthening families and nurturing sustainable household practices",
          details:
            "Provided vegetable garden kits and hands-on guidance across six Karnataka districts, enhancing household food nutrition security through low-cost, organic home farming.",
        },
      ],
    },
    {
      id: "education",
      title: "3. Education",
      tagline: "Fostering lifelong learning, digital literacy, and civic leadership",
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
      ],
    },
    {
      id: "tribal",
      title: "4. Tribal Development",
      tagline: "Preserving indigenous heritage and expanding sustainable opportunities",
      description:
        "SOIL Foundation is committed to supporting the holistic development of tribal communities by strengthening traditional knowledge, cultural heritage, skills and sustainable livelihoods. We aim to promote social inclusion and improve access to essential opportunities and services, enabling tribal families to pursue greater economic independence, dignity and equal opportunities.",
      image: tribalDev,
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
      ],
    },
  ];

  // Core Values Data
  const coreValues = [
    {
      key: "a",
      title: "Grassroot Action",
      desc: "Working with communities, not just for them—listening, learning, strengthening local capacities and nurturing locally owned solutions.",
    },
    {
      key: "b",
      title: "Collaboration",
      desc: "Bringing together government institutions, educational bodies, women SHGs, and local knowledge to create collective impact.",
    },
    {
      key: "c",
      title: "Enabling",
      desc: "Catalyzing self-reliance and empowerment so communities are active architects of their own sustainable destiny.",
    },
    {
      key: "d",
      title: "Professionalism",
      desc: "Development specialists with 8–10 years of cross-sectoral experience combining grassroots empathy with professional rigor.",
    },
    {
      key: "e",
      title: "Accountability",
      desc: "Committed to transparent governance, compliance (80G, 12A, CSR-1, NGO Darpan), and measurable on-ground stewardship.",
    },
    {
      key: "f",
      title: "Sustainability",
      desc: "Designing interventions that endure for generations, respecting ecological boundaries and community ownership.",
    },
  ];

  // Glimpses Art & Field Gallery
  const glimpsesList = [
    {
      img: artHarmonize,
      title: "Harmony of Life & Nature",
      type: "Authentic Folk Painting",
    },
    {
      img: artNurture,
      title: "Nurturing Nature in the Western Ghats",
      type: "Folk Expression",
    },
    {
      img: artEmpower,
      title: "Maternal Health & Women Empowerment",
      type: "Watercolor Narrative",
    },
    {
      img: artEducation,
      title: "Knowledge & Education Journey",
      type: "Community Art",
    },
    {
      img: artEcologyProtect,
      title: "Custodians of the Living Earth",
      type: "Eco Art Expression",
    },
    {
      img: artSupport,
      title: "Stand With Us • Collective Action",
      type: "Grassroots Art",
    },
    {
      img: organicImg,
      title: "Organic Farming Practices",
      type: "Field Initiative",
    },
    {
      img: waterImg,
      title: "Natural Water Body Conservation",
      type: "Western Ghats Action",
    },
    {
      img: artCommunity,
      title: "Community Assembly & Togetherness",
      type: "Village Art Collective",
    },
    {
      img: artResilience,
      title: "Resilience & Living Expression",
      type: "Grassroots Portrait",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reduced motion check
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(".reveal-text-line", { transform: "none", opacity: 1 });
        return;
      }

      // Hero Entry Animation (Fullscreen atmospheric reveal)
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.4 },
      });

      heroTl
        .fromTo(
          ".hero-fullscreen-bg",
          { scale: 1.15 },
          { scale: 1.05, duration: 2.2, ease: "power2.out" }
        )
        .to(
          ".hero-reveal-line",
          {
            y: "0%",
            opacity: 1,
            stagger: 0.2,
          },
          "-=1.5"
        );

      // Scroll reveals for editorial headings
      gsap.utils.toArray(".scroll-reveal-text").forEach((el) => {
        gsap.to(el.querySelectorAll(".reveal-text-line"), {
          y: "0%",
          opacity: 1,
          stagger: 0.12,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            toggleActions: "play none none none",
          },
        });
      });

      // Subtle Parallax on images
      gsap.utils.toArray(".img-parallax").forEach((container) => {
        const img = container.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: 4 },
            {
              yPercent: -6,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.7,
              },
            }
          );
        }
      });

      // Impact Counter Animation (ScrollTrigger)
      gsap.utils.toArray(".stat-counter-value").forEach((statEl) => {
        const target = parseInt(statEl.getAttribute("data-target"), 10);
        const hasCommas = statEl.getAttribute("data-commas") === "true";

        gsap.fromTo(
          statEl,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.2,
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

      // Staggered card reveals
      gsap.utils.toArray(".stagger-trigger").forEach((section) => {
        gsap.from(section.querySelectorAll(".stagger-card-item"), {
          y: 45,
          opacity: 0,
          stagger: 0.14,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            toggleActions: "play none none none",
          },
        });
      });

      // Horizontal Alternating Storytelling Pin & Scroll to Left
      const horizontalSec = horizontalSectionRef.current;
      const horizontalTrack = horizontalTrackRef.current;
      if (horizontalSec && horizontalTrack) {
        const panels = gsap.utils.toArray(
          horizontalTrack.querySelectorAll(".horizontal-panel")
        );
        if (panels.length > 0) {
          const isDesktop = window.innerWidth > 991;

          if (isDesktop) {
            const horizontalTween = gsap.to(panels, {
              xPercent: -100 * (panels.length - 1),
              ease: "none",
              scrollTrigger: {
                trigger: horizontalSec,
                pin: true,
                scrub: 1,
                snap: {
                  snapTo: 1 / (panels.length - 1),
                  duration: { min: 0.25, max: 0.6 },
                  delay: 0.1,
                  ease: "power1.inOut",
                },
                start: "top top",
                end: () => `+=${panels.length * 950}`,
                invalidateOnRefresh: true,
              },
            });

            // Smooth entrance for child elements inside each panel as it glides in
            panels.forEach((panel, i) => {
              if (i > 0) {
                const textCol = panel.querySelector(".story-panel-text-col");
                const imgCol = panel.querySelector(".story-panel-img-col");
                if (textCol && imgCol) {
                  gsap.fromTo(
                    [textCol, imgCol],
                    { opacity: 0.3, scale: 0.96 },
                    {
                      opacity: 1,
                      scale: 1,
                      duration: 0.8,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: panel,
                        containerAnimation: horizontalTween,
                        start: "left 75%",
                        toggleActions: "play reverse play reverse",
                      },
                    }
                  );
                }
              }
            });
          }
        }
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="soil-home-wrapper" ref={mainRef}>
      {/* ===================================================================
          1. HERO SECTION (Fullscreen Mountain with Prominent Centered Text)
      =================================================================== */}
      <section className="hero-fullscreen">
        {/* Fullscreen Mountain Image */}
        <img
          src={bannerImage}
          alt="Western Ghats Mountain Range"
          className="hero-fullscreen-bg"
        />
        {/* Soft Contrast Overlay */}
        <div className="hero-fullscreen-overlay" />

        {/* Centered Prominent Text */}
        <div className="hero-fullscreen-content">
          <div className="reveal-text-wrap mb-2">
            <h1 className="hero-fullscreen-title hero-reveal-line">
              WELCOME TO SOIL FOUNDATION
            </h1>
          </div>

          <div className="reveal-text-wrap">
            <p className="hero-fullscreen-tagline hero-reveal-line">
              Nurturing Nature. Empowering Communities.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Ribbon */}
      <div className="hero-trust-bar">
        <Container>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              <span>Registered Civil Society Trust</span>
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
          2. WHO WE ARE & OUR STORY (The Alternating Image & Text Horizontal Section)
          Interactive editorial journey through our heritage, identity & story
          Pins and glides horizontally to the left on scroll down
      =================================================================== */}
      <section
        id="who-we-are"
        className="horizontal-story-section"
        ref={horizontalSectionRef}
      >
        <div
          id="background"
          style={{ position: "absolute", top: 0, left: 0, height: "1px", width: "1px", opacity: 0 }}
        />
        <div className="horizontal-track" ref={horizontalTrackRef}>
          {whoWeAreStories.map((story, index) => {
            const isReversed = index % 2 === 1; // Alternating composition!
            return (
              <div key={story.id} className="horizontal-panel">
                <div className="story-panel-inner">
                  <div
                    className={`panel-composition-row ${
                      isReversed ? "reverse-composition" : ""
                    }`}
                  >
                    {/* Image Column */}
                    <div className="story-panel-img-col">
                      <div className="story-panel-img-frame">
                        <img
                          src={story.image}
                          alt={story.title}
                          loading="lazy"
                        />
                        <div className="story-panel-img-caption">
                          <span>{story.caption}</span>
                          <span
                            style={{
                              fontSize: "0.74rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              fontFamily: "'Inter', sans-serif",
                              color: "#B99A76",
                            }}
                          >
                            SOIL Art Archive
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Text Column */}
                    <div
                      className={`story-panel-text-col ${
                        story.id === "who-we-are"
                          ? "story-col-with-top-art"
                          : story.id === "our-story"
                          ? "story-col-with-bottom-art"
                          : ""
                      }`}
                    >
                      {/* Geometric Tribal Strip Pattern flushing the top border of Who We Are */}
                      {story.id === "who-we-are" && (
                        <div className="story-panel-top-art flush-top-art">
                          <img
                            src={tribalStripPattern}
                            alt="SOIL Folk Art Border Strip"
                            className="story-top-art-img"
                          />
                        </div>
                      )}

                      <div className="story-panel-text-content">
                        <h2 className="story-panel-title">
                          {story.title}
                        </h2>

                        <div className="story-panel-quote">
                          “{story.quote}”
                        </div>

                        <p className="story-panel-desc">
                          {story.description}
                        </p>

                        <div className="d-flex flex-wrap align-items-center gap-4">
                          <span className="story-panel-badge">
                            <FaLeaf size={11} style={{ color: "#344B38" }} />
                            {story.badge}
                          </span>

                          <HashLink
                            to={story.linkHref}
                            className="btn-soil-link"
                          >
                            <span>{story.linkText}</span>
                            <FaArrowRight size={11} />
                          </HashLink>
                        </div>
                      </div>

                      {/* Traditional Folk Art Border along the bottom of Our Story text section */}
                      {story.id === "our-story" && (
                        <div className="story-panel-bottom-art flush-bottom-art">
                          <img
                            src={tribalBorderArt}
                            alt="SOIL Folk Art Border"
                            className="story-bottom-art-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================================
          3. VISION & MISSION SECTION (Uncropped Artwork Background)
      =================================================================== */}
      <section id="vision-mission" className="vision-mission-section">
        <Container>
          {/* Header */}
          <div className="text-center mb-5 scroll-reveal-text">
            <span className="eyebrow-tag">GUIDING COMPASS</span>
            <h2
              className="reveal-text-line"
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(2.3rem, 3.5vw, 3.2rem)",
                color: "#344B38",
              }}
            >
              Our Vision & Mission
            </h2>
            <div className="decorative-divider center" />
          </div>

          {/* Vision & Mission Aesthetic Highlight Cards */}
          <Row className="gy-4 stagger-trigger justify-content-center">
            {/* Vision Card */}
            <Col lg={6} className="stagger-card-item">
              <div className="vm-card-aesthetic">
                <div>
                  <div className="vm-aesthetic-tag">
                    <FaLeaf size={12} style={{ color: "#344B38" }} />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="vm-aesthetic-title">Flourishing In Harmony</h3>
                  <blockquote className="vm-aesthetic-quote">
                    “A world where every life flourishes in harmony with nature.”
                  </blockquote>
                  <p className="vm-aesthetic-desc">
                    Envisioning thriving biodiverse ecosystems where indigenous
                    cultures, rural families, and pristine forests mutually protect
                    and nourish one another.
                  </p>
                </div>
                <div className="vm-aesthetic-pills">
                  <span>Ecosystem Restoration</span>
                  <span>Community Coexistence</span>
                </div>
              </div>
            </Col>

            {/* Mission Card */}
            <Col lg={6} className="stagger-card-item">
              <div className="vm-card-aesthetic">
                <div>
                  <div className="vm-aesthetic-tag">
                    <FaHandsHelping size={12} style={{ color: "#344B38" }} />
                    <span>Our Mission</span>
                  </div>
                  <h3 className="vm-aesthetic-title">Fostering Holistic Development</h3>
                  <blockquote className="vm-aesthetic-quote">
                    “Our mission is to foster development by protecting the
                    environment, promoting ecological balance, advancing education
                    and health, empowering women and supporting tribal
                    development, thereby building a sustainable and equitable
                    future for all.”
                  </blockquote>
                  <p className="vm-aesthetic-desc">
                    Building an inclusive, resilient future for Western Ghats
                    communities through collaborative grassroots action and
                    ecological stewardship.
                  </p>
                </div>
                <div className="vm-aesthetic-pills">
                  <span>Grassroots Action</span>
                  <span>Equitable Future</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================================================================
          4. OUR VALUES SECTION (Ethics & Principles)
      =================================================================== */}
      <section id="values" className="our-values-section">
        <Container>
          <div className="text-center mb-5 scroll-reveal-text">
            <span className="eyebrow-tag">ETHICS & PRINCIPLES</span>
            <h2
              className="reveal-text-line"
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(2.2rem, 3.2vw, 2.9rem)",
                color: "#344B38",
              }}
            >
              Our Core Values
            </h2>
            <div className="decorative-divider center" />
          </div>

          <Row className="gy-4 stagger-trigger">
            {coreValues.map((val) => (
              <Col lg={4} md={6} key={val.key} className="stagger-card-item">
                <div className="value-card">
                  <div className="value-num">{val.key.toUpperCase()}.</div>
                  <div className="value-title">{val.title}</div>
                  <p style={{ fontSize: "0.92rem", margin: 0, lineHeight: 1.7 }}>
                    {val.desc}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===================================================================
          4. OUR IMPACT SECTION (#344B38 Immersive Impact Section)
      =================================================================== */}
      <section id="impact" className="impact-hero-section">
        <div className="impact-bg-pattern" />
        <Container className="position-relative" style={{ zIndex: 2 }}>
          {/* Eyebrow & Title */}
          <div className="text-center mb-5 scroll-reveal-text">
            <span
              className="eyebrow-tag"
              style={{ color: "#B99A76" }}
            >
              MEASURABLE GROUNDWORK
            </span>
            <h2
              className="reveal-text-line"
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                color: "#F5F1E8",
              }}
            >
              Our Impact
            </h2>
            <p
              style={{
                maxWidth: "650px",
                margin: "0 auto",
                color: "rgba(245, 241, 232, 0.8)",
                fontSize: "1.05rem",
              }}
            >
              Across Karnataka and the Western Ghats, translating grassroots
              conviction into measurable, sustainable milestones for families
              and natural habitats.
            </p>
            <div
              className="decorative-divider center"
              style={{ backgroundColor: "#B99A76" }}
            />
          </div>

          {/* 5 Impact Metrics from Document */}
          <Row className="gy-4 justify-content-center stagger-trigger">
            {/* Metric 1 */}
            <Col lg={4} md={6} className="stagger-card-item">
              <div className="impact-stat-card">
                <div className="impact-num">
                  <span
                    className="stat-counter-value"
                    data-target="18500"
                    data-commas="true"
                  >
                    18,500
                  </span>
                  <span className="impact-num-accent">+</span>
                </div>
                <div className="impact-label">Families Empowered</div>
              </div>
            </Col>

            {/* Metric 2 */}
            <Col lg={4} md={6} className="stagger-card-item">
              <div className="impact-stat-card">
                <div className="impact-num">
                  <span
                    className="stat-counter-value"
                    data-target="415"
                    data-commas="false"
                  >
                    415
                  </span>
                  <span className="impact-num-accent">+</span>
                </div>
                <div className="impact-label">Villages Reached</div>
              </div>
            </Col>

            {/* Metric 3 */}
            <Col lg={4} md={6} className="stagger-card-item">
              <div className="impact-stat-card">
                <div className="impact-num">
                  <span
                    className="stat-counter-value"
                    data-target="11"
                    data-commas="false"
                  >
                    11
                  </span>
                </div>
                <div className="impact-label">Active Projects</div>
              </div>
            </Col>

            {/* Metric 4 */}
            <Col lg={6} md={6} className="stagger-card-item">
              <div className="impact-stat-card">
                <div className="impact-num">
                  <span
                    className="stat-counter-value"
                    data-target="10"
                    data-commas="false"
                  >
                    10
                  </span>
                </div>
                <div className="impact-label">Districts Transformed</div>
              </div>
            </Col>

            {/* Metric 5 */}
            <Col lg={6} md={6} className="stagger-card-item">
              <div className="impact-stat-card">
                <div className="impact-num">
                  <span
                    className="stat-counter-value"
                    data-target="2"
                    data-commas="false"
                  >
                    2
                  </span>
                </div>
                <div className="impact-label">States of Operation</div>
              </div>
            </Col>
          </Row>

          {/* Impact Narrative Quote */}
          <div
            className="text-center mt-5 p-4 mx-auto"
            style={{
              maxWidth: "800px",
              backgroundColor: "rgba(245, 241, 232, 0.06)",
              borderRadius: "16px",
              border: "1px solid rgba(185, 154, 118, 0.25)",
            }}
          >
            <FaQuoteLeft
              size={24}
              style={{ color: "#B99A76", marginBottom: "0.8rem" }}
            />
            <p
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: "#F5F1E8",
                marginBottom: 0,
              }}
            >
              “Communities are not merely recipients of development, but active
              partners in shaping the change they wish to see.”
            </p>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          5. OUR AREAS OF IMPACT (4 Core Pillars with Interactive Deep-Dive)
      =================================================================== */}
      <section id="areas" className="areas-section">
        <Container>
          <div className="text-center mb-5 scroll-reveal-text">
            <span className="eyebrow-tag">PROGRAMMATIC FOOTPRINT</span>
            <h2
              className="reveal-text-line"
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(2.4rem, 3.8vw, 3.4rem)",
                color: "#344B38",
              }}
            >
              Our Areas of Impact
            </h2>
            <div className="decorative-divider center" />
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 border-bottom pb-2" style={{ borderColor: "rgba(185, 154, 118, 0.3) !important" }}>
            {impactPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`pillar-tab-btn ${activePillar === idx ? "active" : ""}`}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Active Pillar Card Display */}
          {(() => {
            const pillar = impactPillars[activePillar];
            return (
              <div className="pillar-card p-4 p-lg-5">
                <Row className="gy-4">
                  {/* Left Column: Visuals & Authentic Art */}
                  <Col lg={5}>
                    <div className="pillar-img-wrap mb-4 rounded-4 shadow-sm">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                      />
                    </div>
                    {/* Authentic Community Art Badge from Soil Foundation images */}
                    <div
                      style={{
                        backgroundColor: "#E8E2D5",
                        borderRadius: "14px",
                        padding: "1rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        border: "1px solid rgba(185, 154, 118, 0.4)",
                      }}
                    >
                      <img
                        src={pillar.artImage}
                        alt={pillar.artCaption}
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: "'EB Garamond', Georgia, serif",
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "#344B38",
                          }}
                        >
                          {pillar.artCaption}
                        </div>
                        <small
                          style={{
                            color: "#A66B4E",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.72rem",
                            textTransform: "uppercase",
                            fontWeight: 600,
                          }}
                        >
                          Original SOIL Art Archive
                        </small>
                      </div>
                    </div>
                  </Col>

                  {/* Right Column: Key Initiatives & Quotes */}
                  <Col lg={7} className="ps-lg-4">
                    <span className="eyebrow-tag">CORE DOMAIN</span>
                    <h3
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: "2.2rem",
                        color: "#344B38",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "1.15rem",
                        color: "#A66B4E",
                        marginBottom: "1.2rem",
                      }}
                    >
                      "{pillar.tagline}"
                    </p>
                    <p style={{ lineHeight: 1.7, marginBottom: "1.8rem" }}>
                      {pillar.description}
                    </p>

                    <h4
                      style={{
                        fontFamily: "'EB Garamond', Georgia, serif",
                        fontSize: "1.35rem",
                        color: "#344B38",
                        marginBottom: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      Key Initiatives:
                    </h4>

                    {/* Initiative Items */}
                    <div className="d-flex flex-column gap-2">
                      {pillar.initiatives.map((init, i) => (
                        <div key={i} className="initiative-item">
                          <h5>{init.name}</h5>
                          <div
                            style={{
                              fontFamily: "'EB Garamond', Georgia, serif",
                              fontStyle: "italic",
                              color: "#A66B4E",
                              fontSize: "0.95rem",
                              marginBottom: "0.4rem",
                            }}
                          >
                            “{init.quote}”
                          </div>
                          <p>{init.details}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <HashLink to="/work#areasOfWork" className="btn-soil-primary">
                        <span>Read Full Program Reports</span>
                        <FaArrowRight size={12} />
                      </HashLink>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })()}
        </Container>
      </section>

      {/* ===================================================================
          6. OUR TEAM SECTION (Experienced Leadership & Grassroots Roots)
      =================================================================== */}
      <section id="team" className="team-highlight-section">
        <Container>
          <div className="team-quote-box text-center">
            <span className="eyebrow-tag">HUMAN STRENGTH</span>
            <h2
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                color: "#344B38",
                marginBottom: "1.2rem",
              }}
            >
              Our Team
            </h2>

            <div
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                fontStyle: "italic",
                color: "#A66B4E",
                maxWidth: "750px",
                margin: "0 auto 2rem",
              }}
            >
              “Young in our journey. Experienced in our approach. Committed to
              lasting impact.”
            </div>

            <p
              style={{
                maxWidth: "850px",
                margin: "0 auto 2rem",
                textAlign: "justify",
                fontSize: "1.02rem",
                lineHeight: "1.8",
              }}
            >
              SOIL Foundation is a young and growing Civil Society Organization
              led by a team of development professionals with 8–10 years of
              experience across government and non-government sectors. Our team
              brings diverse expertise in community mobilization, stakeholder
              engagement and communication, community institution building,
              livelihoods promotion, programme implementation, collaboration and
              networking.
            </p>

            <p
              style={{
                maxWidth: "850px",
                margin: "0 auto 2.5rem",
                textAlign: "justify",
                fontSize: "1.02rem",
                lineHeight: "1.8",
              }}
            >
              Grounded in grassroots realities and driven by a commitment to
              meaningful change, we bring together experience, local knowledge
              and innovative approaches to design and implement solutions that
              are inclusive, practical and sustainable.
            </p>

            <HashLink to="/about#team" className="btn-soil-primary">
              <span>Meet The Leadership & Advisory Board</span>
              <FaArrowRight size={12} />
            </HashLink>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          7. GLIMPSES (Required Heading: Visual Art & On-Ground Highlights)
      =================================================================== */}
      <section id="glimpses" className="glimpses-section">
        <Container>
          <div className="text-center mb-5 scroll-reveal-text">
            <span className="eyebrow-tag">VISUAL ARCHIVES</span>
            <h2
              className="reveal-text-line"
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                color: "#344B38",
              }}
            >
              Glimpses
            </h2>
            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "#49483D",
                fontSize: "1.05rem",
              }}
            >
              Artistic expressions, indigenous paintings, and vibrant moments
              from our field interventions in the Western Ghats.
            </p>
            <div className="decorative-divider center" />
          </div>

          <Row className="gy-4 stagger-trigger">
            {glimpsesList.map((item, index) => (
              <Col lg={3} md={6} sm={6} key={index} className="stagger-card-item">
                <div className="glimpse-card">
                  <img src={item.img} alt={item.title} />
                  <div className="glimpse-overlay">
                    <div>
                      <small
                        style={{
                          color: "#B99A76",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {item.type}
                      </small>
                      <div className="glimpse-caption">{item.title}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===================================================================
          8. ESTEEMED PARTNERS & RESOURCES (From Document Requirements)
      =================================================================== */}
      <section id="resources" className="resources-section">
        <Container>
          {/* Esteemed Partners */}
          <div className="text-center mb-5 scroll-reveal-text">
            <span className="eyebrow-tag">INSTITUTIONAL TRUST</span>
            <h2
              className="reveal-text-line"
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
                color: "#344B38",
              }}
            >
              Our Esteemed Partners
            </h2>
            <div className="decorative-divider center" />
          </div>

          <Row className="gy-4 mb-5 justify-content-center text-center">
            <Col lg={3} md={6}>
              <div
                style={{
                  backgroundColor: "#F5F1E8",
                  padding: "1.8rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(185, 154, 118, 0.35)",
                  height: "100%",
                }}
              >
                <h5 style={{ fontFamily: "'EB Garamond'", color: "#344B38", fontSize: "1.3rem" }}>
                  ISRA
                </h5>
                <small style={{ color: "#49483D", fontSize: "0.82rem" }}>
                  Institute of Social Responsibility & Accountability
                </small>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div
                style={{
                  backgroundColor: "#F5F1E8",
                  padding: "1.8rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(185, 154, 118, 0.35)",
                  height: "100%",
                }}
              >
                <h5 style={{ fontFamily: "'EB Garamond'", color: "#344B38", fontSize: "1.3rem" }}>
                  Quality Council of India
                </h5>
                <small style={{ color: "#49483D", fontSize: "0.82rem" }}>
                  QCI & Sarpanch Samvad National Platform
                </small>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div
                style={{
                  backgroundColor: "#F5F1E8",
                  padding: "1.8rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(185, 154, 118, 0.35)",
                  height: "100%",
                }}
              >
                <h5 style={{ fontFamily: "'EB Garamond'", color: "#344B38", fontSize: "1.3rem" }}>
                  Tata-Dhan Academy
                </h5>
                <small style={{ color: "#49483D", fontSize: "0.82rem" }}>
                  Alumni Fellowship & Knowledge Network
                </small>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div
                style={{
                  backgroundColor: "#F5F1E8",
                  padding: "1.8rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(185, 154, 118, 0.35)",
                  height: "100%",
                }}
              >
                <h5 style={{ fontFamily: "'EB Garamond'", color: "#344B38", fontSize: "1.3rem" }}>
                  Karnataka SHG Federations
                </h5>
                <small style={{ color: "#49483D", fontSize: "0.82rem" }}>
                  Grassroots Women Entrepreneur Collectives
                </small>
              </div>
            </Col>
          </Row>

          {/* Resources Section from Document */}
          <div className="pt-4">
            <div className="text-center mb-4">
              <span className="eyebrow-tag">TRANSPARENCY & KNOWLEDGE</span>
              <h3
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "2.2rem",
                  color: "#344B38",
                }}
              >
                Resources & Documentation
              </h3>
            </div>

            <Row className="gy-4 stagger-trigger">
              <Col lg={3} md={6} className="stagger-card-item">
                <div className="resource-card">
                  <div>
                    <h5 style={{ color: "#344B38", fontFamily: "'EB Garamond'", fontSize: "1.3rem" }}>
                      Annual Reports
                    </h5>
                    <p style={{ fontSize: "0.88rem", color: "#49483D" }}>
                      Comprehensive annual overviews detailing program milestones,
                      beneficiary reach, and audited accounts.
                    </p>
                  </div>
                  <HashLink to="/about#whoarewe" className="btn-soil-outline py-2 px-3" style={{ fontSize: "0.82rem" }}>
                    <span>Download Report</span>
                    <FaDownload size={11} />
                  </HashLink>
                </div>
              </Col>

              <Col lg={3} md={6} className="stagger-card-item">
                <div className="resource-card">
                  <div>
                    <h5 style={{ color: "#344B38", fontFamily: "'EB Garamond'", fontSize: "1.3rem" }}>
                      Financial Reports
                    </h5>
                    <p style={{ fontSize: "0.88rem", color: "#49483D" }}>
                      Audited balance sheets, 80G/12A regulatory filings, and CSR
                      utilization statements.
                    </p>
                  </div>
                  <HashLink to="/about#whoarewe" className="btn-soil-outline py-2 px-3" style={{ fontSize: "0.82rem" }}>
                    <span>View Financials</span>
                    <FaDownload size={11} />
                  </HashLink>
                </div>
              </Col>

              <Col lg={3} md={6} className="stagger-card-item">
                <div className="resource-card">
                  <div>
                    <h5 style={{ color: "#344B38", fontFamily: "'EB Garamond'", fontSize: "1.3rem" }}>
                      Media Coverage
                    </h5>
                    <p style={{ fontSize: "0.88rem", color: "#49483D" }}>
                      Press publications, Western Ghats features, and regional
                      news stories showcasing SOIL interventions.
                    </p>
                  </div>
                  <HashLink to="/contact" className="btn-soil-outline py-2 px-3" style={{ fontSize: "0.82rem" }}>
                    <span>Press Archives</span>
                    <FaArrowRight size={11} />
                  </HashLink>
                </div>
              </Col>

              <Col lg={3} md={6} className="stagger-card-item">
                <div className="resource-card">
                  <div>
                    <h5 style={{ color: "#344B38", fontFamily: "'EB Garamond'", fontSize: "1.3rem" }}>
                      Social Media
                    </h5>
                    <p style={{ fontSize: "0.88rem", color: "#49483D" }}>
                      Real-time stories, nursery updates, and women self-help
                      initiatives documented directly from the field.
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-soil-primary py-2 px-3"
                      style={{ fontSize: "0.82rem" }}
                      title="Facebook"
                    >
                      <FaFacebookF size={12} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/soil-foundation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-soil-primary py-2 px-3"
                      style={{ fontSize: "0.82rem" }}
                      title="LinkedIn"
                    >
                      <FaLinkedinIn size={12} />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          9. SUPPORT US (Required Content & Call to Action Banner)
      =================================================================== */}
      <section id="support" className="support-section">
        <Container>
          <div className="support-banner">
            <img
              src={artSupport}
              alt="Art of community solidarity"
              className="support-bg-art"
            />
            <Row className="position-relative" style={{ zIndex: 2 }}>
              <Col lg={8}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#B99A76",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  JOIN THE MOVEMENT
                </span>

                <h2
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                    color: "#F5F1E8",
                    lineHeight: 1.15,
                    marginBottom: "1.2rem",
                  }}
                >
                  Support Us
                </h2>

                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)",
                    fontStyle: "italic",
                    color: "#B99A76",
                    marginBottom: "1.5rem",
                  }}
                >
                  “Change becomes meaningful when we choose to be part of it.”
                </p>

                <p
                  style={{
                    color: "rgba(245, 241, 232, 0.88)",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                    maxWidth: "680px",
                  }}
                >
                  At SOIL Foundation, we believe lasting change grows when people,
                  communities and nature come together. Your support can help us
                  expand our work in ecological conservation, women empowerment,
                  education and Tribal development.
                </p>

                <p
                  style={{
                    color: "rgba(245, 241, 232, 0.88)",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                    maxWidth: "680px",
                  }}
                >
                  Whether through financial support, partnerships, expertise,
                  resources or volunteering, you can be part of creating a more
                  sustainable, inclusive and equitable future.
                </p>

                <div
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "1.45rem",
                    fontWeight: 600,
                    color: "#F5F1E8",
                    marginBottom: "2rem",
                  }}
                >
                  Stand with us. Be part of the change.
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <HashLink
                    to="/contact#opinionForm"
                    className="btn-soil-light"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Partner / Volunteer With Us</span>
                    <FaArrowRight size={12} />
                  </HashLink>

                  <HashLink
                    to="/contact"
                    className="btn-soil-outline"
                    style={{
                      borderColor: "rgba(245, 241, 232, 0.5)",
                      color: "#F5F1E8",
                      textDecoration: "none",
                    }}
                  >
                    <span>Contact Our Office</span>
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

export default HomePage;
