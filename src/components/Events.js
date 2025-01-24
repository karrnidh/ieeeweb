import React from 'react'
import Cardshead from './Cardshead.js';

export default function Events() {
  return (
      <>
        <div style={{ fontFamily: ' sans-serif', backgroundColor: '#f8f9fa' }}>
          <div
            style={{
              background: 'linear-gradient(to right,rgb(126, 71, 29),rgb(230, 175, 139))'  ,
              color: 'white',
              padding: '20px',
              textAlign: 'center',
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              boxShadow: '0px 4px 6px rgb(227, 197, 167)',
            }}
          >
            <h1 style={{ fontWeight: 700 ,  fontSize: 55 }}>EVENTS</h1>
          </div>
           </div>
        <Cardshead/>
    
       
     
    
        
        
      </>
  )
}
