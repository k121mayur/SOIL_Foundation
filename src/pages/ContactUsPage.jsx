import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { gsap } from "gsap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp,
  FaLeaf,
  FaHandsHelping,
  FaAward,
  FaBuilding,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";

// Visual Asset
import bannerImage from "../assets/WesternGhat.jpg";

// Styles
import "./ContactUsPage.css";

function ContactUsPage() {
  const mainRef = useRef(null);
  const formCardRef = useRef(null);

  // Form State
  const [inquiryType, setInquiryType] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    subscribe: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-bg",
        { scale: 1.12 },
        { scale: 1.04, duration: 2.2, ease: "power2.out" }
      );

      gsap.fromTo(
        ".contact-hero-reveal",
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.16, ease: "power3.out" }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Handle Hash Scrolling
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

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in the required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);
    // Simulate seamless submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (formCardRef.current) {
        formCardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 750);
  };

  // Reset Form
  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
      subscribe: true,
    });
  };

  // Category Options
  const categories = [
    { id: "general", label: "🌱 General Inquiry" },
    { id: "csr", label: "🤝 CSR & Partnerships" },
    { id: "volunteer", label: "🤲 Volunteering & Field Visit" },
    { id: "donation", label: "📜 80G / Donation Support" },
    { id: "education", label: "🎓 Research & Students" },
  ];

  return (
    <div className="soil-contact-wrapper" ref={mainRef}>
      {/* ===================================================================
          1. HERO SECTION (Editorial Western Ghats Banner)
      =================================================================== */}
      <section className="contact-hero-fullscreen">
        <img
          src={bannerImage}
          alt="Western Ghats Landscape"
          className="contact-hero-bg"
        />
        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">
          <span className="contact-hero-eyebrow contact-hero-reveal">
            GRASSROOTS CONNECT • UTTARA KANNADA, KARNATAKA
          </span>

          <h1 className="contact-hero-title contact-hero-reveal">
            Contact Us
          </h1>

          <p className="contact-hero-tagline contact-hero-reveal">
            We are here to listen, collaborate, and nurture sustainable change.
            Reach out to our team in Sirsi and across Karnataka.
          </p>

          <div className="contact-hero-actions contact-hero-reveal">
            <HashLink to="/contact#contact-form" className="btn-soil-primary">
              <span>Send Us a Message</span>
              <FaArrowRight size={12} />
            </HashLink>
            <HashLink to="/contact#office-locations" className="btn-soil-outline-light">
              <span>View Office Locations</span>
            </HashLink>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. TRUST & COMPLIANCE BAR
      =================================================================== */}
      <div className="contact-trust-bar">
        <Container>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="contact-trust-pill">
              <span className="contact-trust-pill-dot" />
              <span>Indian Trust Act 2019</span>
            </div>
            <div className="contact-trust-pill">
              <span className="contact-trust-pill-dot" />
              <span>80G &amp; 12A Certified</span>
            </div>
            <div className="contact-trust-pill">
              <span className="contact-trust-pill-dot" />
              <span>NGO Darpan Compliant</span>
            </div>
            <div className="contact-trust-pill">
              <span className="contact-trust-pill-dot" />
              <span>CSR-1 Certified</span>
            </div>
            <div className="contact-trust-pill">
              <span className="contact-trust-pill-dot" />
              <span>Western Ghats Grassroots</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ===================================================================
          3. QUICK CONTACT CHANNELS (4 Card Grid)
      =================================================================== */}
      <section id="contact-channels" className="contact-channels-section">
        <Container>
          <Row className="gy-4">
            {/* Card 1: Direct Phone */}
            <Col lg={3} sm={6}>
              <div className="channel-card">
                <div className="channel-icon-wrap">
                  <FaPhoneAlt />
                </div>
                <h3 className="channel-title">Direct Phone</h3>
                <div className="channel-value">+91 94805 56719</div>
                <div className="channel-subtext">
                  Mon – Sat: 9:30 AM – 6:00 PM IST for all inquiries
                </div>
                <a href="tel:+919480556719" className="channel-action-link">
                  <span>Call Now</span>
                  <FaArrowRight size={11} />
                </a>
              </div>
            </Col>

            {/* Card 2: WhatsApp Chat */}
            <Col lg={3} sm={6}>
              <div className="channel-card">
                <div className="channel-icon-wrap whatsapp">
                  <FaWhatsapp />
                </div>
                <h3 className="channel-title">WhatsApp Chat</h3>
                <div className="channel-value">+91 94805 56719</div>
                <div className="channel-subtext">
                  Quick text message for fast responses and general guidance
                </div>
                <a
                  href="https://wa.me/919480556719?text=Hello%20SOIL%20Foundation%20Team%2C%20I%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-link"
                >
                  <span>Chat on WhatsApp</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </Col>

            {/* Card 3: Email Direct */}
            <Col lg={3} sm={6}>
              <div className="channel-card">
                <div className="channel-icon-wrap">
                  <FaEnvelope />
                </div>
                <h3 className="channel-title">Email Direct</h3>
                <div className="channel-value">contact@soilfoundation.org.in</div>
                <div className="channel-subtext">
                  Average response time: within 24 to 48 business hours
                </div>
                <a
                  href="mailto:contact@soilfoundation.org.in"
                  className="channel-action-link"
                >
                  <span>Send an Email</span>
                  <FaArrowRight size={11} />
                </a>
              </div>
            </Col>

            {/* Card 4: Corporate Office */}
            <Col lg={3} sm={6}>
              <div className="channel-card">
                <div className="channel-icon-wrap">
                  <FaBuilding />
                </div>
                <h3 className="channel-title">Corporate Office</h3>
                <div className="channel-value">Sirsi, Karnataka</div>
                <div className="channel-subtext">
                  Gayatri Nagar, Banavasi Road, Sirsi - 581401, Uttara Kannada
                </div>
                <HashLink to="/contact#office-locations" className="channel-action-link">
                  <span>View Details</span>
                  <FaArrowRight size={11} />
                </HashLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================================================================
          4. MAIN INTERACTIVE FORM & COLLABORATION OVERVIEW (#contact-form)
      =================================================================== */}
      <section id="contact-form" className="contact-main-section">
        <Container>
          <Row className="align-items-stretch gy-5">
            {/* Left Column: Context, Narrative & Purpose */}
            <Col lg={5} className="d-flex flex-column justify-content-between">
              <div className="contact-info-col">
                <span className="eyebrow-tag">LET'S GROW TOGETHER</span>
                <h2 className="contact-section-heading">
                  Start a Conversation with Our Team
                </h2>
                <div className="decorative-divider" />

                <p style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "#49483D" }}>
                  Whether you represent a corporate CSR program, an educational institution,
                  a grassroots volunteer group, or wish to support local environmental and
                  livelihood initiatives, we welcome your partnership.
                </p>

                {/* Direct Quote Card */}
                <div className="contact-quote-box">
                  <p className="contact-quote-text">
                    "At SOIL, we work with communities, not just for them — listening,
                    learning, and nurturing locally owned solutions."
                  </p>
                  <span className="contact-quote-author">
                    — SOIL Foundation Grassroots Philosophy
                  </span>
                </div>

                {/* Key Ways to Engage */}
                <div className="contact-purpose-list">
                  <div className="contact-purpose-item">
                    <div className="contact-purpose-icon">
                      <FaLeaf size={16} />
                    </div>
                    <div>
                      <h4 className="contact-purpose-heading">
                        CSR &amp; Environmental Alliances
                      </h4>
                      <p className="contact-purpose-desc">
                        Co-create auditable conservation, nursery, and water revival projects.
                      </p>
                    </div>
                  </div>

                  <div className="contact-purpose-item">
                    <div className="contact-purpose-icon">
                      <FaHandsHelping size={16} />
                    </div>
                    <div>
                      <h4 className="contact-purpose-heading">
                        Volunteering &amp; Community Visits
                      </h4>
                      <p className="contact-purpose-desc">
                        Participate in tree nurturing, student mentoring, and field workshops.
                      </p>
                    </div>
                  </div>

                  <div className="contact-purpose-item">
                    <div className="contact-purpose-icon">
                      <FaAward size={16} />
                    </div>
                    <div>
                      <h4 className="contact-purpose-heading">
                        Donations &amp; 80G Tax Deductions
                      </h4>
                      <p className="contact-purpose-desc">
                        Contribute with full transparency, receipting, and compliance certificates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Working Hours Badge */}
                <div className="contact-hours-box">
                  <FaClock className="contact-hours-icon" />
                  <p className="contact-hours-text">
                    <strong>Working Hours:</strong> Monday – Saturday, 9:30 AM to 6:00 PM IST.
                    Office visits recommended by appointment.
                  </p>
                </div>
              </div>
            </Col>

            {/* Right Column: Clean Interactive Form */}
            <Col lg={7}>
              <div className="contact-form-card" ref={formCardRef}>
                {!isSubmitted ? (
                  <>
                    <span className="contact-form-badge">ONLINE INQUIRY</span>
                    <h3 className="contact-form-title">Send Us a Message</h3>
                    <p className="contact-form-desc">
                      Share your questions, proposal, or thoughts below. We will get back to you promptly.
                    </p>

                    <form onSubmit={handleSubmit}>
                      {/* Inquiry Category Selector */}
                      <label className="inquiry-category-label">
                        I am reaching out regarding:
                      </label>
                      <div className="inquiry-pills-wrap">
                        {categories.map((cat) => (
                          <button
                            type="button"
                            key={cat.id}
                            className={`inquiry-pill-btn ${
                              inquiryType === cat.id ? "active" : ""
                            }`}
                            onClick={() => setInquiryType(cat.id)}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>

                      <Row className="g-3">
                        {/* Full Name */}
                        <Col md={6}>
                          <div className="soil-form-group">
                            <label htmlFor="contact-name" className="soil-form-label">
                              Full Name <span className="required-mark">*</span>
                            </label>
                            <input
                              type="text"
                              id="contact-name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="e.g. Ramesh Hegde"
                              className="soil-input"
                            />
                          </div>
                        </Col>

                        {/* Email Address */}
                        <Col md={6}>
                          <div className="soil-form-group">
                            <label htmlFor="contact-email" className="soil-form-label">
                              Email Address <span className="required-mark">*</span>
                            </label>
                            <input
                              type="email"
                              id="contact-email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g. ramesh@example.com"
                              className="soil-input"
                            />
                          </div>
                        </Col>

                        {/* Phone Number */}
                        <Col md={6}>
                          <div className="soil-form-group">
                            <label htmlFor="contact-phone" className="soil-form-label">
                              Phone / WhatsApp (Optional)
                            </label>
                            <input
                              type="tel"
                              id="contact-phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 98765 43210"
                              className="soil-input"
                            />
                          </div>
                        </Col>

                        {/* Organization */}
                        <Col md={6}>
                          <div className="soil-form-group">
                            <label htmlFor="contact-org" className="soil-form-label">
                              Company / Organization (Optional)
                            </label>
                            <input
                              type="text"
                              id="contact-org"
                              name="organization"
                              value={formData.organization}
                              onChange={handleInputChange}
                              placeholder="e.g. Foundation / CSR Dept"
                              className="soil-input"
                            />
                          </div>
                        </Col>

                        {/* Message Textarea */}
                        <Col md={12}>
                          <div className="soil-form-group">
                            <label htmlFor="contact-message" className="soil-form-label">
                              Your Message <span className="required-mark">*</span>
                            </label>
                            <textarea
                              id="contact-message"
                              name="message"
                              required
                              rows={4}
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Please describe how we can collaborate, your questions, or field interest..."
                              className="soil-input"
                            />
                          </div>
                        </Col>
                      </Row>

                      {/* Subscribe Checkbox */}
                      <label className="soil-form-check">
                        <input
                          type="checkbox"
                          name="subscribe"
                          checked={formData.subscribe}
                          onChange={handleInputChange}
                        />
                        <span>
                          Keep me updated on SOIL Foundation's newsletters and grassroots conservation stories.
                        </span>
                      </label>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-contact-submit"
                      >
                        {isSubmitting ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FaPaperPlane size={14} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success Feedback Screen */
                  <div className="contact-success-wrap">
                    <div className="success-icon-badge">
                      <FaCheckCircle />
                    </div>
                    <h3 className="success-title">Message Received!</h3>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name}</strong>. Your inquiry regarding{" "}
                      <strong>{categories.find((c) => c.id === inquiryType)?.label}</strong> has
                      been sent to our coordination team. We will review your message and reach
                      out within 24–48 business hours.
                    </p>

                    <div className="success-summary-box">
                      <div className="success-summary-row">
                        <span className="success-summary-label">Sender:</span>
                        <span>{formData.name}</span>
                      </div>
                      <div className="success-summary-row">
                        <span className="success-summary-label">Email:</span>
                        <span>{formData.email}</span>
                      </div>
                      {formData.phone && (
                        <div className="success-summary-row">
                          <span className="success-summary-label">Phone:</span>
                          <span>{formData.phone}</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-soil-primary"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================================================================
          5. LOCATIONS & MAP SECTION (#office-locations)
      =================================================================== */}
      <section id="office-locations" className="contact-locations-section">
        <Container>
          <div className="text-center mb-5">
            <span className="eyebrow-tag">GRASSROOTS ROOTS</span>
            <h2 className="contact-section-heading">Our Field &amp; Office Locations</h2>
            <div className="decorative-divider center" />
            <p style={{ maxWidth: "680px", margin: "0 auto", color: "#5D5C53" }}>
              Situated in the Western Ghats region of Karnataka, SOIL Foundation works closely
              with rural and tribal villages throughout Uttara Kannada.
            </p>
          </div>

          <Row className="gy-4 align-items-stretch">
            {/* Left Card: Office Addresses & Guidance */}
            <Col lg={6}>
              <div className="office-info-card">
                {/* Corporate Office */}
                <div className="office-item">
                  <div className="office-item-icon">
                    <FaBuilding />
                  </div>
                  <div>
                    <h4 className="office-item-title">Corporate Office</h4>
                    <p className="office-item-address">
                      Lakshmi Krishna Nilaya, 5th Main, 3rd Cross,<br />
                      Gayatri Nagar, Banavasi Road, Sirsi – 581401,<br />
                      Uttara Kannada District, Karnataka, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Sirsi,+Karnataka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="office-directions-link"
                    >
                      <span>Get Directions on Google Maps</span>
                      <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                </div>

                {/* Registered Office */}
                <div className="office-item">
                  <div className="office-item-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="office-item-title">Registered Trust Office</h4>
                    <p className="office-item-address">
                      #63, Shirasagaon (V), Kakkalli (P),<br />
                      Sirsi Taluk, Uttara Kannada District,<br />
                      Karnataka – 582336, India
                    </p>
                    <span style={{ fontSize: "0.82rem", color: "#8C8B80" }}>
                      Registered under the Indian Trust Act, 2019
                    </span>
                  </div>
                </div>

                {/* Transit Guidance */}
                <div className="transit-guidance-box">
                  <div className="transit-title">Visiting From Outside Karnataka?</div>
                  <p className="transit-details">
                    <strong>Nearest Airports:</strong> Hubballi Airport (HBX ~105 km) and Goa Dabolim Airport (GOI ~180 km).<br />
                    <strong>Nearest Railway Stations:</strong> Talguppa (54 km), Kumta (62 km), and Hubballi Junction (105 km).
                  </p>
                </div>
              </div>
            </Col>

            {/* Right Card: Map Embed */}
            <Col lg={6}>
              <div className="map-frame-card">
                <div className="map-frame-header">
                  <h4 className="map-frame-title">Sirsi &amp; Western Ghats, Karnataka</h4>
                  <a
                    href="https://maps.google.com/?q=Sirsi,+Uttara+Kannada,+Karnataka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-soil-outline-light"
                    style={{ padding: "0.4rem 1rem", fontSize: "0.8rem" }}
                  >
                    <span>Full Screen</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
                <div className="map-frame-body">
                  <iframe
                    title="SOIL Foundation Sirsi Location Map"
                    src="https://maps.google.com/maps?q=Sirsi,%20Uttara%20Kannada,%20Karnataka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================================================================
          6. GENTLE CALL TO ACTION BANNER (Before Footer)
      =================================================================== */}
      <div className="contact-cta-band">
        <Container>
          <div className="contact-cta-content">
            <h3 className="contact-cta-title">
              Want to see our grassroots work in action?
            </h3>
            <p className="contact-cta-desc">
              Explore our active programs in ecological conservation, women’s nurseries,
              and rural education across the Western Ghats.
            </p>
            <div className="contact-cta-buttons">
              <HashLink to="/work" className="btn-soil-light">
                <span>Explore Our Work</span>
                <FaArrowRight size={12} />
              </HashLink>
              <HashLink to="/about#whoarewe" className="btn-soil-outline-light">
                <span>Read Our Story</span>
              </HashLink>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ContactUsPage;
