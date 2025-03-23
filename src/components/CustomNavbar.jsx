// import React from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import logo from '../images/SOIL_Foundation_Logo.ico';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function CustomNavbar() {
//   return (
//     <Navbar
//       expand="lg"
//       className="bg-light-green shadow-sm"
//       sticky="top"
//     >
//       <Container fluid>
//         {/* Left: Logo */}
//         <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//           <img
//             src={logo}
//             alt="Soil Foundation Logo"
//             className="img-fluid"
//             style={{ height: '70px', width: '120px' }}
//           />
//         </Navbar.Brand>

//         {/* Toggle button for mobile view */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         {/* Collapsible navigation items */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto fw-bold">
//             {/* Home Link */}
//             <Nav.Link as={Link} to="/" className="text-dark">
//               Home
//             </Nav.Link>

//             {/* About Us Dropdown */}
//             <NavDropdown
//               title={<span className="text-dark">About Us</span>}
//               id="about-dropdown"
//             >
//               <NavDropdown.Item as={Link} to="/about#whoarewe">About Organization</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/about#vision">Vision</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/about#missions">Missions</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/about#bod">Board of Directors</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/about#team">Team</NavDropdown.Item>
//             </NavDropdown>

//             {/* Our Work Dropdown */}
//             <NavDropdown
//               title={<span className="text-dark">Our Work</span>}
//               id="work-dropdown"
//             >
//               <NavDropdown.Item as={Link} to="/work#areasOfWork">Areas of Work</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/work#impact">Impact</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/work#objectives">Objectives</NavDropdown.Item>
//             </NavDropdown>

//             {/* Contact Us Link */}
//             <Nav.Link as={Link} to="/contact" className="text-dark">
//               Contact Us
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;

import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import logo from '../images/SOIL_Foundation_Logo.ico';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-light-green shadow-sm"
      sticky="top"
    >
      <Container fluid>
        {/* Left: Logo */}
        <Navbar.Brand as={HashLink} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Soil Foundation Logo"
            className="img-fluid"
            style={{ height: '70px', width: '120px' }}
          />
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible navigation items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            {/* Home Link */}
            <Nav.Link as={HashLink} to="/" className="text-dark">
              Home
            </Nav.Link>

            {/* About Us Dropdown */}
            <NavDropdown
              title={<span className="text-dark">About Us</span>}
              id="about-dropdown"
            >
              <NavDropdown.Item as={HashLink} to="/about#whoarewe">About Organization</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} to="/about#vision">Vision</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} to="/about#missions">Missions</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} to="/about#bod">Board of Directors</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} to="/about#team">Team</NavDropdown.Item>
            </NavDropdown>

            {/* Our Work Dropdown */}
            <NavDropdown
              title={<span className="text-dark">Our Work</span>}
              id="work-dropdown"
            >
              <NavDropdown.Item as={HashLink} to="/work#areasOfWork">Areas of Work</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} to="/work#impact">Impact</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} to="/work#objectives">Objectives</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Us Link */}
            <Nav.Link as={HashLink} to="/contact" className="text-dark">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;