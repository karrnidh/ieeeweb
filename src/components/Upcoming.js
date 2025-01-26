import React from 'react';
import Cards from './Cards';

export default function Upcoming() {
  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <div className="container text-center">
        <div className="row row-cols-4">
          {/* <div className="col"><Cards  image = "yes1.jpg" text= "event" link = "/"/></div> */}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <p style={{ color: '#6c757d', fontSize: '1.25rem' }}>Coming Soon!</p>
        </div>
      </div>
    </div>
  );
}
