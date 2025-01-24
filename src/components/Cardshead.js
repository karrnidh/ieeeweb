import React, { useState } from 'react';
import Upcoming from './Upcoming.js';
import Archived from './Archived.js';

export default function Cardshead() {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setActiveTab('Upcoming')}
                style={{
                  backgroundColor: activeTab === 'Upcoming' ? 'rgb(116, 62, 23)' : 'transparent',
                  color: activeTab === 'Upcoming' ? 'white' : 'black',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Upcoming
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setActiveTab('Archived')}
                style={{
                  backgroundColor: activeTab === 'Archived' ? 'rgb(116, 62, 23)' : 'transparent',
                  color: activeTab === 'Archived' ? 'white' : 'black',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Archived
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {activeTab === 'Upcoming' && <Upcoming />}
          {activeTab === 'Archived' && <Archived />}
        </div>
      </div>
    </div>
  );
}