import React, { useState, useEffect } from 'react';

export default function Titlebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width is less than or equal to 768px
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const iconStyle = { fontSize: '20px', marginRight: '5px', color: '#333' };

  // Styles for mobile view
  const mobileTextStyle = {
    fontSize: '0.8rem', // Reduced text size for mobile
  };

  const mobileIconStyle = {
    fontSize: '18px', // Reduced icon size for mobile
    marginRight: '8px', // Increased space between the icon and the text
  };

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

            {/* Second Row: Location and Email (Side-by-Side on All Screens) */}
            <div className={`col-12 ${isMobile ? '' : 'col-md-6'} d-flex flex-row justify-content-between justify-content-md-end align-items-center mt-3 mt-md-0`}>
              {/* Location Section */}
              <div className="d-flex align-items-center me-3">
                <i className="bi bi-geo-alt" style={isMobile ? mobileIconStyle : iconStyle}></i>
                <div style={isMobile ? mobileTextStyle : {}}>
                  <div style={{ fontWeight: 'bold' }}>Location</div>
                  <div>NSW, Australia</div>
                </div>
              </div>

              {/* Email Section */}
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope" style={isMobile ? mobileIconStyle : iconStyle}></i>
                <div style={isMobile ? mobileTextStyle : {}}>
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
