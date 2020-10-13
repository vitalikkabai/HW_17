import React from 'react';
import Timer from './timer';

const GenerateTimerBlock = () => (
  <div className="generateBlock">
    <Timer time={10000} autostart={false} step={500}/>
  </div>
);

export default GenerateTimerBlock;
