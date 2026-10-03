import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import logo from "../images/SOIL_Foundation_Logo-removebg.png";
import fallbackLogo from "../images/SOIL_Foundation_Logo.ico";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#344B38",
        color: "#F5F1E8",
        paddingTop: "4.5rem",
        paddingBottom: "2rem",
        borderTop: "1px solid rgba(185, 154, 118, 0.3)",
      }}
    >
      <Container>
        <Row className="gy-5 pb-5 border-bottom" style={{ borderColor: "rgba(185, 154, 118, 0.25) !important" }}>
          {/* Column 1: Organization & Vision */}
          <Col lg={4} md={6} className="text-start">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src={logo}
                onError={(e) => {
                  e.currentTarget.src = fallbackLogo;
                }}
                alt="SOIL Foundation"
                style={{
                  height: "58px",
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <div>
                <h5
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    margin: 0,
                    color: "#F5F1E8",
                  }}
                >
                  SOIL FOUNDATION
                </h5>
                <small
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    color: "#B99A76",
                    textTransform: "uppercase",
                  }}
                >
                  Supporting Optimal Improvement of Lives
                </small>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: "1.7",
                color: "rgba(245, 241, 232, 0.8)",
                marginBottom: "1.5rem",
              }}
            >
              A registered grassroots civil society trust founded in 2019 in the
              Western Ghats of Uttara Kannada. Committed to ecological balance,
              women empowerment, education, and tribal development.
            </p>
            <div className="d-flex gap-2 flex-wrap">
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(185, 154, 118, 0.2)",
                  color: "#F5F1E8",
                  border: "1px solid rgba(185, 154, 118, 0.4)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                80G & 12A Certified
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(185, 154, 118, 0.2)",
                  color: "#F5F1E8",
                  border: "1px solid rgba(185, 154, 118, 0.4)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                NGO Darpan & CSR-1
              </span>
            </div>
          </Col>

          {/* Column 2: Navigation Links */}
          <Col lg={2} md={6} sm={6} className="text-start">
            <h5
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "1.25rem",
                color: "#B99A76",
                fontWeight: 600,
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" style={{ fontSize: "0.9rem" }}>
              <li>
                <HashLink
                  to="/"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)", transition: "color 0.2s" }}
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/about#whoarewe"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)", transition: "color 0.2s" }}
                >
                  About Organization
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/about#vision"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)", transition: "color 0.2s" }}
                >
                  Vision & Mission
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/work#areasOfWork"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)", transition: "color 0.2s" }}
                >
                  Areas of Impact
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/work#impact"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)", transition: "color 0.2s" }}
                >
                  Impact Metrics
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/contact"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)", transition: "color 0.2s" }}
                >
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </Col>

          {/* Column 3: Contact Details */}
          <Col lg={3} md={6} sm={6} className="text-start">
            <h5
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "1.25rem",
                color: "#B99A76",
                fontWeight: 600,
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              Contact Offices
            </h5>
            <div className="d-flex flex-column gap-3" style={{ fontSize: "0.85rem", color: "rgba(245, 241, 232, 0.8)" }}>
              <div className="d-flex gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: "#A66B4E" }} />
                <span>
                  <strong style={{ color: "#F5F1E8" }}>Registered Office:</strong> #63, Shirasagaon (V), Kakkalli (P), Sirsi Taluk, Uttara Kannada, Karnataka - 582336
                </span>
              </div>
              <div className="d-flex gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: "#A66B4E" }} />
                <span>
                  <strong style={{ color: "#F5F1E8" }}>Corporate Office:</strong> Lakshmi Krishna Nilaya, 5th Main, 3rd Cross, Gayatri Nagar, Banavasi Road, Sirsi - 581401, Karnataka
                </span>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <FaPhoneAlt className="flex-shrink-0" style={{ color: "#A66B4E" }} />
                <a
                  href="tel:+919480556719"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)" }}
                >
                  +91 94805 56719
                </a>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <FaEnvelope className="flex-shrink-0" style={{ color: "#A66B4E" }} />
                <a
                  href="mailto:contact@soilfoundation.org.in"
                  className="text-decoration-none"
                  style={{ color: "rgba(245, 241, 232, 0.85)" }}
                >
                  contact@soilfoundation.org.in
                </a>
              </div>
            </div>
          </Col>

          {/* Column 4: Social Connect & Engagement */}
          <Col lg={3} md={6} className="text-start">
            <h5
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: "1.25rem",
                color: "#B99A76",
                fontWeight: 600,
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              Connect With Us
            </h5>
            <p style={{ fontSize: "0.88rem", color: "rgba(245, 241, 232, 0.8)" }}>
              Follow our grassroots stories, community developments, and environmental initiatives.
            </p>
            {/* Social Icons including Facebook & LinkedIn */}
            <div className="d-flex gap-2 mb-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 241, 232, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5F1E8",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(185, 154, 118, 0.3)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#697653";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(245, 241, 232, 0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://www.linkedin.com/company/soil-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 241, 232, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5F1E8",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(185, 154, 118, 0.3)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#697653";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(245, 241, 232, 0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 241, 232, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5F1E8",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(185, 154, 118, 0.3)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#697653";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(245, 241, 232, 0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245, 241, 232, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F5F1E8",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(185, 154, 118, 0.3)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#697653";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(245, 241, 232, 0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaTwitter size={16} />
              </a>
            </div>

            <HashLink
              to="/contact#opinionForm"
              className="btn-soil-light d-inline-flex align-items-center gap-2"
              style={{
                fontSize: "0.85rem",
                padding: "0.6rem 1.4rem",
                textDecoration: "none",
              }}
            >
              <span>Get In Touch</span>
              <FaArrowRight size={12} />
            </HashLink>
          </Col>
        </Row>

        {/* Bottom Copyright & Credits */}
        <Row className="pt-4 align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="footer-bottom-text">
              © {new Date().getFullYear()} SOIL FOUNDATION. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="footer-bottom-text">
              Supported by{" "}
              <a
                href="https://www.siliconmango.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline"
              >
                Silicon Mango
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
