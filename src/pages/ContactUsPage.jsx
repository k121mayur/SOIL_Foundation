// src/pages/ContactUsPage.jsx
import React from 'react';
import ContactBanner from '../images/ContactUsBanner.png';
import logo from '../images/SOIL_Foundation_Logo.ico';

function ContactUsPage() {
  return (
    <>
      <div style={{ position: 'relative' }}>
              <img
                src={ContactBanner}
                alt="Banner"
                style={{
                  width: '100%',
                  height: '250px',
                  maxHeight: '500px',
                  objectFit: 'revert'
                }}
              />
              {/* Container for the overlay text */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10%', // Position text near top
                  right: '5%',
                  textAlign: 'right',
                  color: '#fff',
                  fontFamily: 'Times new roman, Noto serif devnagri',
                  fontWeight: 'bold',
                }}
              >
                {/* Main Title */}
                <h1
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    margin: 0,
                  }}
                >
                  Contact Us
                </h1>
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
            Get in touch
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
                Message
              </label>
              <textarea
                className="form-control"
                id="opinion"
                rows="4"
                placeholder="Share your message here..."
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
    </>
  );
}

export default ContactUsPage;
