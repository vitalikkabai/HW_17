import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

let timerId;

const Timer = ({ time, autostart, step }) => {
  const [currentTime, setCurrentTime] = useState(time);
  const [isRunning, setIsRunning] = useState(autostart);

  useEffect(() => {
    clearTimeout(timerId);

    if (currentTime > 0 && isRunning) {
      timerId = setTimeout(() => {
        setCurrentTime(currentTime - 1000);
      }, step);
    }
  }, [currentTime, isRunning, step]);

  const handleRunning = () => setIsRunning(!isRunning);

  const handleRestart = () => setCurrentTime(time);

  return (
    <div className="timerBlock">
      <p className="currentTime">{currentTime / 1000}</p>
      <div className="loader" style={{ width: `${(currentTime * 100) / time}%` }} />
      <button className="btn" onClick={handleRunning} type="button">
        {isRunning ? 'Pause' : 'Start'}
      </button>

      <button className="btn" onClick={handleRestart} type="button">
        Restart
      </button>
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  autostart: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
};

Timer.defaultProps = {};

export default Timer;

// const func_1 = () => {
//   const var_1 = 1;

//   const func_2 = (prop_B) => {
//     return var_1 + prop_B;
//   };

//   return func_2;
// };

// const func_3 = func_1();

// func_3(1);
