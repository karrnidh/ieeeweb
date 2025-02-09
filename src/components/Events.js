import React from 'react';
import Cards from './Cards';

export default function Events() {
  return (
    <>
      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa' }}>
        <div
          style={{
            background: 'linear-gradient(to right,rgb(126, 71, 29),rgb(230, 175, 139))',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0px 4px 6px rgb(227, 197, 167)',
          }}
        >
          <h1 style={{ fontWeight: 700, fontSize: 55 }}>EVENTS</h1>
        </div>
      </div>

      {/* Card System */}
      <div style={{ height: '100vh', overflowY: 'auto' }}>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
              <Cards 
                image="/unionbank.png" 
                text="Union Bank Event" 
                description="An Interactive session on Cybersecurity and Gen AI"
                detailedText="The Union Bank Event is a prestigious gathering where industry leaders discuss innovations in finance. Attendees will have access to exclusive networking opportunities, workshops, and key insights from financial experts."
                buttonText="Read More"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
