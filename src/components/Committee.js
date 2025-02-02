import React from 'react';

// ExecutiveCommittee component
export default function ExecutiveCommittee() {
  // Inline styles as JavaScript objects
  const styles = {
    app: {
      textAlign: 'center',
      backgroundColor: 'white',  // Whole page background is white
    },
    sectionTitle: {
      backgroundColor: '#4E3629',    // Brown background for title section
      color: 'white',                // White text
      padding: '15px 0',             // Reduced padding for less gap
      textAlign: 'center',           // Centered text
      marginBottom: '20px',          // Further reduced margin
    },
    sectionTitleText: {
      fontSize: '40px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    introText: {
      fontSize: '20px',              // Larger font size for clarity
      fontWeight: '300',             // Light font weight for elegance
      lineHeight: '1.4',             // Adjusted line height for fewer lines
      color: '#4E3629',              // Rich brown for text
      margin: '0 auto',              // Centered margin
      letterSpacing: '0.5px',        // Slight letter spacing
      maxWidth: '900px',             // Limit width for better readability
      textAlign: 'center',          // Center-aligned text
      padding: '15px 20px',          // Reduced padding for less space
    },
    teamSection: {
      backgroundColor: 'white',    // White background for the team section
      padding: '15px 0',           // Reduced padding for top and bottom spacing
    },
    cardBody: {
      textAlign: 'center',
      padding: '15px 10px',        // Added some padding inside the card for spacing
    },
    linkedInButton: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
    },
    linkedInLogo: {
      width: '40px',
      marginRight: '8px',
    },
    memberImageContainer: {
      width: '150px',             // Increased width for larger image
      height: '150px',            // Increased height for larger image
      borderRadius: '50%',        // Circular shape
      overflow: 'hidden',
      border: '3px solid transparent',
      transition: 'all 0.3s ease',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',       // Space between image and content
    },
    memberImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    memberImageHover: {
      borderColor: '#007bff',
      transform: 'scale(1.1)',
    },
    cardContainer: {
      width: '250px',            // Slightly wider card to fit the content
      height: '340px',           // Reduced card height to fit content better
      margin: '0 auto',          // Center card horizontally
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Make sure content is evenly spaced
      padding: '15px 10px',       // Added padding for better content placement
    },
  };

  const members = [
    {
      name: 'Purvi Dalal',
      position: 'Chairperson',
      imageUrl: 'purvi.png',
      linkedinUrl: 'https://www.linkedin.com/in/purvi-dalal-8304bb1b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Suvrat Jain',
      position: 'Vice Chairperson',
      imageUrl: 'suvrat.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/suvrat-jain-6725a4303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Aayush Aneja',
      position: 'Treasurer',
      imageUrl: 'aayush.png',
      linkedinUrl: 'https://www.linkedin.com/in/aayush-aneja-1246b3290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Karrnidh Arora',
      position: 'Webmaster',
      imageUrl: 'c.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/karrnidh-arora-048913271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Krishil Parmar',
      position: 'Secretary',
      imageUrl: 'krishil.jpeg', // Add Krishil's image URL
      linkedinUrl: 'https://www.linkedin.com/in/krishil-parmar-596636348/', // Add Krishil's LinkedIn URL
    },
  ];

  return (
    <div style={styles.app}>
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
        <h1 style={{ fontWeight: 700, fontSize: 55 }}>OUR TEAM</h1> {/* Updated the title */}
      </div>

      {/* Introduction Text */}
      <p style={styles.introText}>
        Our team is a dynamic blend of driven students, faculty, and mentors passionate about STEM and leadership, each contributing unique skills to our initiatives.
      </p>

      {/* Executive Committee Members Section */}
      <div style={styles.teamSection}>
        <div className="container mt-2"> {/* Further reduced margin-top */}
          <div className="row d-flex justify-content-center">
            {/* First Row: Purvi, Suvrat */}
            {[members[0], members[1]].map((member, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <div className="card" style={styles.cardContainer}>
                  <div
                    style={styles.memberImageContainer}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = styles.memberImageHover.borderColor;
                      e.currentTarget.style.transform = styles.memberImageHover.transform;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      style={styles.memberImage}
                    />
                  </div>
                  <div className="card-body" style={styles.cardBody}>
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.position}</p>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.linkedInButton}
                    >
                      <img
                        src="linkedin.jpg"
                        alt="LinkedIn logo"
                        style={styles.linkedInLogo}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {/* Second Row: Aayush, Karrnidh, Krishil */}
            {[members[2], members[3], members[4]].map((member, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card" style={styles.cardContainer}>
                  <div
                    style={styles.memberImageContainer}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = styles.memberImageHover.borderColor;
                      e.currentTarget.style.transform = styles.memberImageHover.transform;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      style={styles.memberImage}
                    />
                  </div>
                  <div className="card-body" style={styles.cardBody}>
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.position}</p>
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.linkedInButton}
                    >
                      <img
                        src="linkedin.jpg"
                        alt="LinkedIn logo"
                        style={styles.linkedInLogo}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
