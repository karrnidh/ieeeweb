import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Cards(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Normal Card View */}
      <motion.div 
        className="card mx-1 my-5" 
        style={{ width: '14rem', cursor: 'pointer' }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img src={props.image} className="card-img-top" alt="Event Thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{props.text}</h5>
          <p className="card-text">{props.description || "Some quick example text."}</p>
          <button 
            onClick={() => setIsExpanded(true)} 
            className="btn btn-primary" 
            style={{ backgroundColor: "rgb(161, 87, 35)" }}
          >
            {props.buttonText || "Explore"}
          </button>
        </div>
      </motion.div>

      {/* Fullscreen Popup (Modal) */}
      {isExpanded && (
        <motion.div 
          className="popup-overlay" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.6)', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            zIndex: 1000
          }}
          onClick={() => setIsExpanded(false)} // Close modal when clicking outside
        >
          <motion.div 
            className="popup-card"
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '90%', // Wider popup for better readability
              maxWidth: '900px',
              textAlign: 'left',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
              position: 'relative',
              height: '80vh',
              overflowY: 'auto',
              fontFamily: '"Poppins", sans-serif', // Better font
              lineHeight: '1.6', // Improved spacing
              color: '#333' // Slightly darker text for readability
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsExpanded(false)} 
              style={{
                position: 'absolute', 
                top: '10px', 
                right: '15px', 
                border: 'none', 
                background: 'none', 
                fontSize: '20px', 
                cursor: 'pointer', 
                fontWeight: 'bold'
              }}
            >
              ✖
            </button>

            {/* Image & Title */}
            <img src={props.image} className="card-img-top" alt={props.text} style={{ maxWidth: '100%', borderRadius: '10px' }} />
            <h2 style={{ marginTop: '10px', fontSize: '1.8rem', fontWeight: '600', textAlign: 'center' }}>{props.text}</h2>

            {/* Scrollable Content */}
            <div style={{ marginTop: '15px', maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }}>
              <p>
                <strong>Cyber threats are escalating</strong>, making security awareness more crucial than ever. A recent session on cybersecurity and AI highlighted the importance of safeguarding digital assets.  
                The discussion covered real-time cyberattack tracking tools like <strong>Kaspersky’s cybermap</strong>, emphasizing the <strong>CIA Triad</strong>—<em>Confidentiality, Integrity, and Availability</em>—as core principles in data protection.
              </p>

              <p>
                Participants explored major cyber threats, including <strong>data breaches, financial fraud, ransomware, phishing, and smishing</strong>. Experts detailed protective measures such as <strong>firewalls, encryption, multi-factor authentication (MFA), and intrusion detection systems</strong>.
              </p>

              <p>
                The session also addressed <strong>Aadhaar-Enabled Payment System (AEPS) frauds</strong>, where biometric-linked transactions are increasingly targeted. Strategies to mitigate risks included:
              </p>
              <ul>
                <li>Locking biometric data via the <strong>UIDAI website</strong>.</li>
                <li>Utilizing the <strong>mAadhaar app</strong> for additional security.</li>
                <li>Regularly monitoring financial transactions.</li>
              </ul>

              <p>
                The discussion then shifted to <strong>deepfake threats</strong>, illustrating how AI-generated content is misused for <strong>misinformation, fraud, and cyberbullying</strong>. Participants were guided on reporting such incidents through official portals like the <strong>National Cybercrime Reporting Portal</strong> and the <strong>1930 cybercrime helpline</strong>.
              </p>

              <p>
                <strong>Generative AI’s role in cybersecurity and banking</strong> was also examined, with tools like <strong>ChatGPT, Gemini, Perplexity AI, and Claude AI</strong> demonstrated for fraud detection and data analysis.
                A live session showcased AI’s ability to swiftly identify <strong>fraudulent ATM transactions</strong>.
              </p>

              <p>
                The event concluded by stressing the need for <strong>multi-layered security</strong>, <strong>biometric protection in AEPS transactions</strong>, and ongoing vigilance against evolving cyber risks.
                As AI and digital technologies advance, their integration into cybersecurity measures will be essential in ensuring <strong>secure financial and personal data transactions</strong>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
