import React, { useState, useEffect, useMemo } from 'react';

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState('');

  const sections = useMemo(() => ({
    'Our Mission': 'Our mission is to create a dynamic, inclusive community that inspires and equips students to become leaders in STEM. We aim to bridge the gap between theory and practice by fostering collaboration, innovation, and hands-on learning. Through global networking, technical excellence, and leadership initiatives, we strive to nurture the changemakers of tomorrow.',
    'Our Vision': 'We envision a world where technology and innovation empower humanity. Our goal is to be a beacon of inspiration in STEM education, fostering interdisciplinary collaboration and developing sustainable solutions to address global challenges. By cultivating creativity and leadership, we aim to shape a brighter, more equitable future.',
    'Core Values': 'At IEEE SP Jain, our values guide everything we do. We thrive on creativity and bold ideas to solve global challenges, believe in the power of teamwork and shared knowledge, uphold the highest standards of ethics and professionalism, welcome people from all backgrounds and ensure equal opportunities for everyone, and are committed to driving change that benefits the environment and society.',
    'Why Join Us?': 'Becoming a part of the IEEE SP Jain Student Chapter is more than just joining a club — it’s becoming part of a global family. Joining us means accessing exclusive learning opportunities like workshops and certifications, networking with IEEE members and industry professionals, gaining real-world experience through impactful projects, and developing personal growth in leadership and confidence while building lifelong friendships in a supportive community.'
  }), []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = Object.keys(sections).map(section => section.replace(/\s+/g, '-').toLowerCase());
      const offsets = sectionIds.map(id => document.getElementById(id)?.getBoundingClientRect().top || Infinity);
      const activeIndex = offsets.findIndex(offset => offset > 0 && offset < window.innerHeight / 2);
      setActiveSection(activeIndex !== -1 ? sectionIds[activeIndex] : '');
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [sections]);

  const handleClick = (sectionKey) => {
    const sectionId = sectionKey.replace(/\s+/g, '-').toLowerCase();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(to right, rgb(126, 71, 29), rgb(230, 175, 139))',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0px 4px 6px rgb(227, 197, 167)'
      }}>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 40 }}>ABOUT US</h1>
      </div>

      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: '#3E2712',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        position: 'sticky',
        top: '0',
        zIndex: 1000,
        display: 'flex', // Align items in a row
        justifyContent: 'center', // Center the items horizontally
        alignItems: 'center' // Align items vertically in the center if needed
      }}>
        {Object.keys(sections).map((sectionKey, index) => (
          <span key={index}
            style={{
              margin: '0 5px', // Reduced margin to bring the items closer
              padding: '8px',
              cursor: 'pointer',
              fontSize: '16px', // Increased font size for laptop
              color: activeSection === sectionKey.replace(/\s+/g, '-').toLowerCase() ? 'rgb(189, 129, 99)' : 'white',
              whiteSpace: 'nowrap'  // Prevent wrapping of section titles
            }}
            onClick={() => handleClick(sectionKey)}>
            {sectionKey}
          </span>
        ))}
      </nav>

      {/* Content Area */}
      <main style={{
        padding: '20px',
        color: '#333',
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        {Object.keys(sections).map((sectionKey, index) => (
          <section key={index} id={sectionKey.replace(/\s+/g, '-').toLowerCase()} style={{ marginBottom: '40px' }}>
            <h4 style={{
              fontFamily: 'Montserrat, sans-serif',
              borderBottom: '2px solid #ddd',
              paddingBottom: '10px',
              display: 'inline-block' // Prevent full-width underline
            }}>
              {sectionKey}
            </h4>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              marginTop: '20px',
              maxWidth: '800px', // Prevent text from spanning too wide
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {sections[sectionKey]}
            </p>
          </section>
        ))}
      </main>

      {/* Embedded CSS for Mobile Font Size Adjustments */}
      <style>
        {`
          @media (max-width: 768px) {
            nav span {
              font-size: 12px;  // Reduce font size for phone
              white-space: nowrap;  // Ensure all items stay in one line
            }
            h1 {
              font-size: 30px;  // Reduce header size for mobile
            }
            h4 {
              font-size: 16px;  // Reduce subtitle size for mobile
            }
            p {
              font-size: 14px;  // Reduce text size for better fit on small screens
              line-height: 1.4;  // Reduce line height for smaller spacing
              letter-spacing: -0.5px;  // Reduce letter-spacing for compact text
            }
          }
        `}
      </style>
    </div>
  );
}

// Utility: Debounce Function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
