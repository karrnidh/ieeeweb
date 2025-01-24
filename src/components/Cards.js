  import React from 'react';

  export default function Cards(props) {
    return (
   
          
          <div className="card mx-1 , my-5" style={{ width: '14rem'}}>
            <img src={props.image} className="card-img-top" alt="something is wrong " />
            <div className="card-body">
              <h5 className="card-title">{props.text} </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href={props.link} className="btn btn-primary" style ={{ backgroundColor : "rgb(161, 87, 35)"}} >Explore </a>
            </div>
         </div>
    );
  }
