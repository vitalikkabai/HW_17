import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

let timerId;

const SecondTimer = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(time);
  const [isRunning, setIsRunning] = useState(true);
  if (currentTime > 0 && isRunning) {
    timerId = setTimeout(() => {
      setCurrentTime(currentTime - 1000);
    }, 1000);
  }

  useEffect(() => {
    clearInterval(timerId);
    console.log('tick');
  }, [isRunning]);

  const handleRunning = () => setIsRunning(!isRunning);

  const handleRestart = () => setCurrentTime(time);

  return (
    <div>
      <div>{currentTime / 1000}</div>
      <div
        className="loader"
        style={{ width: `${(currentTime * 100) / time}%` }}
      />
      <button onClick={handleRunning} type="button">
        {isRunning ? 'Pause' : 'Start'}
      </button>

      <button onClick={handleRestart} type="button">
        Restart
      </button>
    </div>
  );
};

SecondTimer.propTypes = {
  time: PropTypes.number.isRequired,
};

SecondTimer.defaultProps = {};

export default SecondTimer;

// const func_1 = () => {
//   const var_1 = 1;

//   const func_2 = (prop_B) => {
//     return var_1 + prop_B;
//   };

//   return func_2;
// };

// const func_3 = func_1();

// func_3(1);
