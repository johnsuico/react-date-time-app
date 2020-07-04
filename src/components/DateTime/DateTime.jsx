import React from 'react';
import './DateTime.css';

import Info from '../Info/Info';

const currentDate = new Date().toDateString();
const currentTime = new Date().toLocaleTimeString();

function DateTime() {
  return (
    <div>
      <div className="container">
        <div className="app-container">
          <h1 className="title">React Date Time App</h1>
          <Info subTitle="Current Date" info={currentDate} />
          <Info subTitle="Current Time" info={currentTime} />
        </div>
      </div>
    </div>
  )
}

export default DateTime;