// Importing necessary Bootstrap and custom components
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ContactPage() {
  return (
    <>
      {/* Sticky Header Section */}
      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa' }}>
        <div
          style={{
            background: 'linear-gradient(to right, rgb(126, 71, 29), rgb(230, 175, 139))',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0px 4px 6px rgb(227, 197, 167)',
          }}
        >
          <h1 style={{ fontWeight: 700, fontSize: 55 }}>CONTACT US</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container py-5">
        {/* Introductory Text */}
        <div className="text-center mb-5">
          <p className="lead mb-5">
            Hey guys! Feel free to reach out to us with any questions or queries. We're here to help and would love to hear from you!
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="row g-4 justify-content-center">
          {/* Location Card (Australia Only) */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  <i className="bi bi-geo-alt-fill me-2" style={{ color: '#C4A48C' }}></i>
                  Location
                </h5>
                <p className="mb-3">
                  <strong>Australia:</strong><br />
                  15 Carter St, Lidcombe NSW 2141<br />
                  Sydney, Australia
                </p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  <i className="bi bi-envelope-fill me-2" style={{ color: '#C4A48C' }}></i>
                  Email 
                </h5>
                <p>
                  <strong>For All Inquiries:</strong><br />
                  ieeestudentbranch@spjain.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
