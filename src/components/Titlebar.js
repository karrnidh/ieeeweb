import React from 'react';

export default function Titlebar() {
  const iconStyle = { fontSize: '20px', marginRight: '5px', color: '#333' };
  const textStyle = { display: 'flex', alignItems: 'center', marginBottom: '5px' };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#C4A48C' }}> {/* Slightly darker pastel brown */}
        <div className="container-fluid">
          {/* First row: Logo and SP Jain text */}
          <div className="row align-items-center">
            <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0">
              <img
                src="/spjLogo.jpg" // Path relative to the public folder
                alt="SP Jain Logo"
                style={{ width: '80px', height: '80px', marginRight: '10px' }} // Smaller on mobile
              />
              <a
                className="navbar-brand text-wrap"
                href="/"
                style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}
              >
                IEEE SP Jain School of Global Management Student Chapter
              </a>
            </div>

            {/* Second row: Location and Email Information */}
            <div className="col-12 col-md-6 d-flex justify-content-md-end">
              <div className="d-flex flex-column flex-md-row align-items-start text-start text-md-end">
                {/* Location Section */}
                <div className="d-flex flex-row align-items-center mb-2 mb-md-0 me-md-4">
                  <i className="bi bi-geo-alt" style={iconStyle}></i>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Location</div>
                    <div>NSW, Australia</div>
                  </div>
                </div>

                {/* Email Support Section */}
                <div className="d-flex flex-row align-items-center">
                  <i className="bi bi-envelope" style={iconStyle}></i>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Email Support</div>
                    <div>ieeestudentbranch@spjain.org</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
