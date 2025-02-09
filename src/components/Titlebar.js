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

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#C4A48C' }}>
        <div className="container-fluid">
          <div className="row w-100 align-items-center text-md-start">
            
            {/* SP Jain Logo and Title (Left-Aligned on Mobile) */}
            <div 
              className="col-12 col-md-6 d-flex align-items-center"
              style={isMobile ? { justifyContent: 'flex-start', textAlign: 'left' } : {}}
            >
              <img
                src="/spjLogo.jpg"
                alt="SP Jain Logo"
                style={{
                  width: isMobile ? '50px' : '80px', 
                  height: isMobile ? '50px' : '80px', 
                  marginRight: '10px'
                }}
              />
              <a
                className="navbar-brand text-wrap"
                href="/"
                style={{
                  fontSize: isMobile ? '0.9rem' : '1.2rem',
                  fontWeight: 'bold',
                  color: '#333',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                IEEE SP Jain School of Global Management Student Chapter
              </a>
            </div>

            {/* IEEE Logo (Right-Aligned & Moved Up on Mobile) */}
            <div 
              className={`col-12 col-md-6 d-flex ${isMobile ? 'justify-content-end mt-n2' : 'justify-content-end'}`}
              style={isMobile ? { alignItems: 'center', marginTop: '-15px' } : {}}
            >
              <img
                src="/ieee.png"
                alt="IEEE Logo"
                style={{
                  maxWidth: isMobile ? '20%' : '30%', 
                  height: 'auto',
                }}
              />
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
