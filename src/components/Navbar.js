import React from 'react';

export default function Navibar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#C4A48C' }}>
        <div className="container-fluid">
          {/* Center section: Navbar buttons */}
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link text-dark-brown" aria-current="page" href="/">Home</a>
              </li>
              <span className="separator mx-2">|</span> {/* Separator */}
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/aboutus">About Us</a>
              </li>
              <span className="separator mx-2">|</span> {/* Separator */}
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/events">Events</a>
              </li>
              <span className="separator mx-2">|</span> {/* Separator */}
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/executivecommittee">Executive Committee</a>
              </li>
              <span className="separator mx-2">|</span> {/* Separator */}
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CSS for dark brown text and spacing */}
      <style>
        {`
          .text-dark-brown {
            color: #3e2a1f !important; /* Dark brown color */
          }
          .separator {
            color: #3e2a1f; /* Match separator color to dark brown */
          }
        `}
      </style>
    </div>
  );
}
