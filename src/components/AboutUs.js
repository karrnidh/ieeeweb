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
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 55 }}>ABOUT US</h1>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Navigation Bar */}
        <nav
          style={{
            width: '20%',
            backgroundColor: '#3E2712',
            color: 'white',
            padding: '20px',
            overflowY: 'auto',
            height: '100vh',
            position: 'sticky',
            top: '0',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {Object.keys(sections).map((sectionKey, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  backgroundColor:
                    activeSection === sectionKey.replace(/\s+/g, '-').toLowerCase() ? '#5F3224' : 'transparent',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  color:
                    activeSection === sectionKey.replace(/\s+/g, '-').toLowerCase() ? 'white' : '#F5F5DC',
                }}
                onClick={() => handleClick(sectionKey)}
              >
                {sectionKey}
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Area */}
        <main
          style={{
            width: '80%',
            padding: '40px',
            overflowY: 'auto',
            color: '#333',
            backgroundColor: '#f8f9fa',
            paddingTop: '40px',
          }}
        >
          {Object.keys(sections).map((sectionKey, index) => (
            <React.Fragment key={index}>
              <section
                id={sectionKey.replace(/\s+/g, '-').toLowerCase()}
                style={{ marginBottom: '40px' }}
              >
                <h4 style={{ fontFamily: 'Montserrat, sans-serif', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
                  {sectionKey}
                </h4>
                <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '20px', whiteSpace: 'pre-wrap' }}>
                  {sections[sectionKey]}
                </p>
              </section>
              <hr style={{ border: '1px solid #ddd', margin: '20px 0' }} />
            </React.Fragment>
          ))}
        </main>
      </div>
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
