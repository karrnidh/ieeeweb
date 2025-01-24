import React from 'react';

export default function Carousel() {
  return (
    <div>
      {/* Bootstrap Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First Image */}
          <div className="carousel-item active">
            <img 
              src="/campus.webp" 
              className="d-block w-100" 
              alt="Campus View"  // Descriptive alt text
              style={{ height: '300px', objectFit: 'cover' }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Empowering Innovators</h5>
              <p>IEEE SP Jain student branch fostering creativity and technology.</p>
            </div>
          </div>

          {/* Second Image */}
          <div className="carousel-item">
            <img 
              src="/hall.webp" 
              className="d-block w-100" 
              alt="Event Hall"  // Descriptive alt text
              style={{ height: '300px', objectFit: 'cover' }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Join Our Global Network</h5>
              <p>Expand your skills and make an impact worldwide.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" aria-label="Previous slide">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" aria-label="Next slide">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Welcome Text Section */}
      <section style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '600', color: '#4E3629' }}>Welcome to IEEE SP Jain School of Global Management Student Chapter</h2>
        <p style={{ fontSize: '18px', color: '#4E3629' }}>Your gateway to technology, innovation, and leadership.</p>
      </section>

      {/* Who We Are Title Banner */}
      <div 
        style={{
          backgroundColor: '#4E3629', // Brown background for the title bar
          padding: '20px 0', // Padding for the title bar
          textAlign: 'center',
        }}
      >
        <h3 
          style={{
            fontSize: '40px',
            fontWeight: '700',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Who We Are
        </h3>
      </div>

      {/* Who We Are Section */}
      <section 
        style={{ 
          padding: '80px 20px', 
          textAlign: 'center', 
          backgroundColor: '#f1f1f1' // Grey background
        }}
      >
        <div style={{ marginBottom: '30px', maxWidth: '900px', margin: '0 auto' }}>
          <p 
            style={{
              fontSize: '20px',
              lineHeight: '1.8',
              fontWeight: '300',
              marginBottom: '20px',
              color: '#4E3629',
            }}
          >
            We are proud to be part of the global IEEE community, the world’s largest technical professional organization. Our mission is to advance technology for humanity, and we are honored to contribute to this noble cause from our home at the SP Jain School of Global Management in Sydney.
          </p>

          {/* Second Paragraph */}
          <p 
            style={{
              fontSize: '20px',
              lineHeight: '1.8',
              fontWeight: '300',
              marginBottom: '20px',
              color: '#4E3629',
            }}
          >
            At our student branch, we create an environment where both undergraduate and postgraduate students, as well as academics, collaborate to solve real-world problems. We bring together the brightest minds to foster innovation in the fields of science, technology, engineering, and mathematics (STEM).
          </p>
        </div>

        {/* Third Paragraph */}
        <div style={{ marginBottom: '40px', maxWidth: '900px', margin: '0 auto' }}>
          <p 
            style={{
              fontSize: '20px',
              lineHeight: '1.8',
              fontWeight: '300',
              color: '#4E3629',
              marginBottom: '20px',
            }}
          >
            Our community is driven by passion and a desire to learn. We embrace new ideas, empower aspiring leaders, and are committed to making a global impact through technology. Whether you’re here to innovate, lead, or simply explore, there’s a place for you.
          </p>
        </div>
        
        {/* Final Call-out */}
        <div style={{ fontSize: '20px', lineHeight: '1.8', fontWeight: '300', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#4E3629' }}>
            Dive deeper into our website to discover the exciting projects, committees, and success stories we’re proud of. Join us in shaping the future of technology.
          </p>
        </div>
      </section>

      {/* White Section After */}
      <section 
        style={{
          padding: '40px 20px',
          backgroundColor: 'white', // White background after the grey section
          textAlign: 'center',
        }}
      >
        {/* This section can be used for additional content if necessary */}
      </section>
    </div>
  );
}
