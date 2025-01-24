import React from 'react';

export default function Titlebar() {
  const iconStyle = { fontSize: '20px', marginRight: '5px', color: '#333' };
  const sectionStyle = { display: 'flex', flexDirection: 'column', marginRight: '30px', alignItems: 'flex-start' };
  const textStyle = { display: 'flex', alignItems: 'center', marginBottom: '5px' };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#C4A48C' }}> {/* Slightly darker pastel brown */}
        {/* First row: Logo and SP Jain text */}
        <div className="container-fluid d-flex align-items-center">
          <img 
            src="/spjLogo.jpg" // Path relative to the public folder
            alt="SP Jain Logo" 
            style={{ width: '120px', height: '120px', marginRight: '10px' }} 
          />
          <a className="navbar-brand" href="/">IEEE SP Jain School of Global Management Student Chapter</a>
        </div>

        {/* Second row: Location and Email Information */}
        <div className="container-fluid d-flex justify-content-end align-items-center">
          <div style={{ display: 'flex', alignItems: 'flex-start', color: '#333', fontSize: '14px', fontWeight: '500' }}>
            {/* Location Section */}
            <div style={sectionStyle}>
              <div style={textStyle}>
                <i className="bi bi-geo-alt" style={iconStyle}></i> {/* Bootstrap Icons: Location */}
                <div>
                  <div>Location</div>
                  <div>NSW, Australia</div>
                </div>
              </div>
            </div>

            {/* Email Support Section */}
            <div style={sectionStyle}>
              <div style={textStyle}>
                <i className="bi bi-envelope" style={iconStyle}></i> {/* Bootstrap Icons: Email */}
                <div>
                  <div>Email Support</div>
                  <div>abc@ieee.org</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
