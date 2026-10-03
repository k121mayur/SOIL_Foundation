import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/SOIL_Foundation_Logo-removebg.png';
import fallbackLogo from '../images/SOIL_Foundation_Logo.ico';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? '#344B38' : '#F5F1E8';
  const subtitleColor = scrolled ? '#A66B4E' : '#B99A76';
  const textShadowStyle = scrolled ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.55)';

  return (
    <Navbar
      expand="lg"
      expanded={navExpanded}
      onToggle={(expanded) => setNavExpanded(expanded)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: scrolled
          ? 'rgba(245, 241, 232, 0.95)'
          : navExpanded
          ? 'rgba(30, 45, 33, 0.98)'
          : 'transparent',
        backdropFilter: scrolled || navExpanded ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled || navExpanded ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(185, 154, 118, 0.3)'
          : 'none',
        boxShadow: scrolled
          ? '0 8px 30px rgba(52, 75, 56, 0.1)'
          : 'none',
        transition: 'all 0.35s ease',
        paddingTop: scrolled ? '0.55rem' : '1rem',
        paddingBottom: scrolled ? '0.55rem' : '1rem',
        zIndex: 1050,
      }}
    >
      <Container fluid className="px-lg-5 px-3">
        {/* Logo & Brand Identity */}
        <Navbar.Brand
          as={HashLink}
          to="/"
          className="d-flex align-items-center gap-2 py-0"
          onClick={() => setNavExpanded(false)}
        >
          <img
            src={logo}
            onError={(e) => {
              e.currentTarget.src = fallbackLogo;
            }}
            alt="SOIL Foundation Logo"
            style={{
              height: '52px',
              width: 'auto',
              maxHeight: '52px',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              filter: !scrolled && !navExpanded ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' : 'none',
            }}
          />
          <div className="d-flex flex-column text-start ms-2">
            <span
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: '1.3rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: navExpanded && !scrolled ? '#F5F1E8' : textColor,
                lineHeight: 1.1,
                textShadow: textShadowStyle,
                transition: 'color 0.3s ease',
              }}
            >
              SOIL FOUNDATION
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: subtitleColor,
                fontWeight: 600,
                textShadow: textShadowStyle,
                transition: 'color 0.3s ease',
              }}
            >
              Nurturing Nature • Empowering Lives
            </span>
          </div>
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle
          aria-controls="soil-navbar-nav"
          className="border-0 shadow-none px-2"
          style={{
            filter: scrolled ? 'none' : 'invert(1) brightness(2)',
          }}
        />

        {/* Navigation links */}
        <Navbar.Collapse id="soil-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3 gap-2 py-3 py-lg-0">
            {/* Home Link */}
            <Nav.Link
              as={HashLink}
              to="/"
              className="px-2"
              onClick={() => setNavExpanded(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                fontWeight: 600,
                color: navExpanded && !scrolled ? '#F5F1E8' : textColor,
                letterSpacing: '0.02em',
                textShadow: textShadowStyle,
                transition: 'color 0.25s ease',
              }}
            >
              Home
            </Nav.Link>

            {/* About Us Dropdown */}
            <NavDropdown
              title={
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: navExpanded && !scrolled ? '#F5F1E8' : textColor,
                    textShadow: textShadowStyle,
                  }}
                >
                  About Us
                </span>
              }
              id="about-dropdown"
              className="soil-dropdown"
            >
              <NavDropdown.Item
                as={HashLink}
                to="/about#whoarewe"
                onClick={() => setNavExpanded(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#49483D' }}
              >
                About Organization
              </NavDropdown.Item>
              <NavDropdown.Item
                as={HashLink}
                to="/about#vision"
                onClick={() => setNavExpanded(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#49483D' }}
              >
                Vision
              </NavDropdown.Item>
              <NavDropdown.Item
                as={HashLink}
                to="/about#missions"
                onClick={() => setNavExpanded(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#49483D' }}
              >
                Missions
              </NavDropdown.Item>
              <NavDropdown.Item
                as={HashLink}
                to="/about#bod"
                onClick={() => setNavExpanded(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#49483D' }}
              >
                Board of Directors
              </NavDropdown.Item>
              <NavDropdown.Item
                as={HashLink}
                to="/about#team"
                onClick={() => setNavExpanded(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#49483D' }}
              >
                Team
              </NavDropdown.Item>
            </NavDropdown>

            {/* Our Work Dropdown */}
            <NavDropdown
              title={
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: navExpanded && !scrolled ? '#F5F1E8' : textColor,
                    textShadow: textShadowStyle,
                  }}
                >
                  Our Work
                </span>
              }
              id="work-dropdown"
              className="soil-dropdown"
            >
              <NavDropdown.Item
                as={HashLink}
                to="/work#areasOfWork"
                onClick={() => setNavExpanded(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#49483D' }}
              >
                Areas of Work
              </NavDropdown.Item>
              <NavDropdown.Item
                as={HashLink}
                to="/work#impact"
                onClick={() => setNavExpanded(false)}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#49483D' }}
              >
                Impact
              </NavDropdown.Item>
            </NavDropdown>

            {/* Contact Us Link */}
            <Nav.Link
              as={HashLink}
              to="/contact"
              className="px-2"
              onClick={() => setNavExpanded(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                fontWeight: 600,
                color: navExpanded && !scrolled ? '#F5F1E8' : textColor,
                textShadow: textShadowStyle,
              }}
            >
              Contact Us
            </Nav.Link>

            {/* Support CTA Button */}
            <div className="ms-lg-2 mt-2 mt-lg-0">
              {scrolled ? (
                <HashLink
                  to="/#support"
                  className="btn-soil-primary"
                  onClick={() => setNavExpanded(false)}
                  style={{
                    padding: '0.55rem 1.4rem',
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                  }}
                >
                  Support Us
                </HashLink>
              ) : (
                <HashLink
                  to="/#support"
                  onClick={() => setNavExpanded(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.55rem 1.45rem',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(245, 241, 232, 0.16)',
                    border: '1.5px solid rgba(245, 241, 232, 0.7)',
                    color: '#F5F1E8',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    backdropFilter: 'blur(8px)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F1E8';
                    e.currentTarget.style.color = '#344B38';
                    e.currentTarget.style.borderColor = '#F5F1E8';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.16)';
                    e.currentTarget.style.color = '#F5F1E8';
                    e.currentTarget.style.borderColor = 'rgba(245, 241, 232, 0.7)';
                  }}
                >
                  Support Us
                </HashLink>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;