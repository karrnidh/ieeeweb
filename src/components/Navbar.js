import React from 'react';

export default function Navibar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-fluid">
          {/* Navbar content for mobile */}
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-wrap w-100">
              {/* All buttons in a single row */}
              <li className="nav-item">
                <a className="nav-link text-dark-brown" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/aboutus">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/executivecommittee">Committee</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark-brown" href="/contactus">Connect</a>
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

          /* Mobile-specific changes */
          @media (max-width: 700px) {
            .navbar-nav {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-evenly; /* Distribute buttons evenly */
              margin: 0; /* Remove extra margin */
            }

            /* All buttons should take up equal space in the row */
            .navbar-nav .nav-item {
              width: 18%; /* Adjust width to fit all buttons in one row */
              text-align: center; /* Center align buttons */
              margin: 0; /* Remove margin between items */
            }

            /* Adjust font size for mobile */
            .nav-link {
              font-size: 14px;
              padding: 1px 1px; /* Compact padding to reduce space */
            }
          }

          /* Default laptop view: Center-aligned navbar items */
          @media (min-width: 769px) {
            .navbar-nav {
              justify-content: center; /* Center-align the navbar items */
            }

            .nav-item {
              margin-left: 5px; /* Reduce spacing between items */
              margin-right: 5px; /* Reduce spacing between items */
            }

            /* Add separators for desktop view */
            .separator {
              border-right: 1px solid #ccc; /* Add separator */
              padding-right: 5px; /* Adjust padding after separator */
            }

            /* Remove separator from the last item */
            .separator:last-child {
              border-right: none;
            }
          }
        `}
      </style>
    </div>
  );
}
