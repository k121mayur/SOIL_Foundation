// src/pages/ContactUsPage.jsx
import React from 'react';
import logo from '../assets/logo.png'

function ContactUsPage() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Card with Soil Foundation details */}
      <div
        style={{
          backgroundColor: '#496907',
          color: '#fff',
          padding: '20px',
          borderRadius: '5px',
          marginBottom: '20px',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <img src={logo} alt="Soil Foundation Logo" style={{ width: '60px' }} />
        <h4 style={{ fontWeight: 'bold', marginTop: '10px' }}>SOIL FOUNDATION</h4>
        <div style={{textAlign: 'start'}}>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Registered Office: </p>
          <p style={{ marginLeft: '15px' }}>
            SOIL Foundation, #63, C/o Narayan Hegde, Shirasagaon(V), Kakkalli (P), Sirsi
            taluk, Uttarkannada - 582336, Karnataka, India
          </p>

          {/* Corporate Office */}
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Corporate Office: </p>
          <p style={{ marginLeft: '15px' }}>
            SOIL Foundation, #600/1, 8th Link Road, Alanahalli Layout,
            Mysore - 570028, Karnataka, India
          </p>

          {/* Contact Number */}
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Contact Number: </p>
          <p style={{ marginLeft: '15px' }}>
            +91 8309221660 / +91 9480556719
          </p>

          {/* Email */}
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Email: </p>
          <p style={{ marginLeft: '15px' }}>
            soilfoundation2019@gmail.com
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div
        id="opinionForm"
        style={{
          maxWidth: '600px',
          margin: '50px auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <h3 className="section-heading" style={{ textAlign: 'center' }}>
          Share Your Valuable Opinion
        </h3>
        <form>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold' }}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Opinion Textarea */}
          <div className="mb-3">
            <label htmlFor="opinion" className="form-label" style={{ fontWeight: 'bold' }}>
              Your Opinion
            </label>
            <textarea
              className="form-control"
              id="opinion"
              rows="4"
              placeholder="Share your thoughts here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div style={{textAlign: 'center'}}>
            <button type="submit" className="btn btn-custom" style={{textAlign: 'center'}}>
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
