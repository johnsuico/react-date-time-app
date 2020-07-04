import React from 'react';
import './Info.css';

function Info(props) {
  return (
    <div className="info-container">
      <h2 className="sub-title">{props.subTitle}</h2>
      <p className="info">{props.info}</p>
    </div>
  )
}

export default Info;