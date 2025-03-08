// // src/components/CustomNavbar.jsx
// import React from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'; // Replace with your actual logo

// function CustomNavbar() {
//   return (
//     <Navbar
//       expand="lg"
//       className="bg-light-green"
//       style={{ padding: '10px 20px' }}
//       sticky="top"
//     >
//       <Container>
//         {/* Logo on the left */}
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src={logo}
//             alt="Soil Foundation Logo"
//             style={{ width: '110px', height: '50px' }}
//           />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto" style={{ fontWeight: 'bold' }}>
//             {/* Home Link */}
//             <Nav.Link as={Link} to="/" style={{ marginRight: '15px' }}>
//               Home
//             </Nav.Link>

//             {/* About Us Dropdown */}
//             <NavDropdown title="About Us" id="about-dropdown" style={{ marginRight: '15px' }}>
//               <NavDropdown.Item href="/about#whoarewe">
//                 About Organization
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/about#vision">
//                 Vision
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/about#missions">
//                 Missions
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/about#bod">
//                 Board of Directors
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/about#team">
//                 Team
//               </NavDropdown.Item>
//             </NavDropdown>

//             {/* Our Work Dropdown */}
//             <NavDropdown title="Our Work" id="work-dropdown" style={{ marginRight: '15px' }}>
//               <NavDropdown.Item href="/work#areasOfWork">
//                 Areas of Work
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/work#impact">
//                 Impact
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/work#objectives">
//                 Objectives
//               </NavDropdown.Item>
//             </NavDropdown>

//             {/* Contact Us Link */}
//             <Nav.Link as={Link} to="/contact">
//               Contact Us
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;

// src/components/CustomNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Replace with your actual logo

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-light-green"
      style={{
        padding: '10px 40px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // optional subtle shadow
      }}
      sticky="top"
    >
      {/* Use a fluid container to span the full width */}
      <Container fluid>
        {/* Left: Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Soil Foundation Logo"
            style={{
              height: '60px',    // Increase height for better visibility
              width: 'auto',     // Maintain aspect ratio
              marginRight: '15px'
            }}
          />
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible navigation items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {/* Home Link */}
            <Nav.Link as={Link} to="/" style={{ marginRight: '15px', color: '#000' }}>
              Home
            </Nav.Link>

            {/* About Us Dropdown */}
            <NavDropdown
              title="About Us"
              id="about-dropdown"
              style={{ marginRight: '15px', color: '#000' }}
            >
              <NavDropdown.Item href="/about#whoarewe">About Organization</NavDropdown.Item>
              <NavDropdown.Item href="/about#vision">Vision</NavDropdown.Item>
              <NavDropdown.Item href="/about#missions">Missions</NavDropdown.Item>
              <NavDropdown.Item href="/about#bod">Board of Directors</NavDropdown.Item>
              <NavDropdown.Item href="/about#team">Team</NavDropdown.Item>
            </NavDropdown>

            {/* Our Work Dropdown */}
            <NavDropdown
              title="Our Work"
              id="work-dropdown"
              style={{ marginRight: '15px', color: '#000' }}
            >
              <NavDropdown.Item href="/work#areasOfWork">Areas of Work</NavDropdown.Item>
              <NavDropdown.Item href="/work#impact">Impact</NavDropdown.Item>
              <NavDropdown.Item href="/work#objectives">Objectives</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Us Link */}
            <Nav.Link as={Link} to="/contact" style={{ color: '#000' }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
