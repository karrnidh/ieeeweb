import React from 'react';

export default function Titlebar() {
  const iconStyle = { fontSize: '20px', marginRight: '5px', color: '#333' };
  const textStyle = { display: 'flex', alignItems: 'center', marginBottom: '5px' };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#C4A48C' }}>
        <div className="container-fluid">
          <div className="row w-100 align-items-center">
            {/* First Row: Logo and Title */}
            <div className="col-12 col-md-6 d-flex align-items-center">
              <img
                src="/spjLogo.jpg"
                alt="SP Jain Logo"
                style={{ width: '80px', height: '80px', marginRight: '10px' }}
              />
              <a
                className="navbar-brand text-wrap"
                href="/"
                style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}
              >
                IEEE SP Jain School of Global Management Student Chapter
              </a>
            </div>

            {/* Second Row: Location and Email (Aligned Right on Desktop) */}
            <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-md-end align-items-start align-items-md-center text-md-end mt-3 mt-md-0">
              {/* Location Section */}
              <div className="d-flex align-items-center me-md-4 mb-2 mb-md-0">
                <i className="bi bi-geo-alt" style={iconStyle}></i>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Location</div>
                  <div>NSW, Australia</div>
                </div>
              </div>

              {/* Email Section */}
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope" style={iconStyle}></i>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Email Support</div>
                  <div>ieeestudentbranch@spjain.org</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
