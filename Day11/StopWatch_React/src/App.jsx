// import { useEffect, useState, useRef } from "react";

// const App = () => {
//   const [timeInSec, setTimeInSec] = useState(0); // if we want to store and render we use use State
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   // console.log("🟡 : timeInSec:", timeInSec);
//   const intervalRef = useRef(null); //if we want to store and dont care about render so we use useRef

//   useEffect(() => {
//     console.log("========= setting interval =====");

//     intervalRef.current = setInterval(() => {
//       setTimeInSec((prevTime) => {
//         return prevTime + 1;
//       });
//     }, 1000);
//   }, []);

//   const handlePause = () => {
//     const intervalid = intervalRef.current;
//     clearInterval(intervalid);

//     setIsTimerRunning(false);
//   };
//   const handleResume = () => {
//     if (!isTimerRunning) {
//       intervalRef.current = setInterval(() => {
//         setTimeInSec((prevTime) => {
//           return prevTime + 1;
//         });
//       }, 1000);

//       setIsTimerRunning(true);
//     }
//   };
//   // const handleReset = () => {
//   //   intervalRef.current = setInterval(() => {
//   //     setTimeInSec(() => {
//   //       return 0;
//   //     });
//   //   });
//   //   setIsTimerRunning(false);
//   // };
//   //use effect will only run on initial render ?? why ?? because dependency array is empty
//   return (
//     <div>
//       <h2>00:00:{timeInSec}</h2>
//       {isTimerRunning ? (
//         <button onClick={handlePause}>Pause</button>
//       ) : (
//         <button onClick={handleResume}>Play</button>
//       )}
//       {/* <button onClick={handleReset}>Reset</button> */}
//     </div>
//   );
// };
// export default App;

import { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [timeInSec, setTimeInSec] = useState(0); // if we want to store and render we use use State
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [lap, setLaps] = useState([]);

  // console.log("🟡 : timeInSec:", timeInSec);

  useEffect(() => {
    console.log("Timer running state changed", isTimerRunning);

    let intervalId = null;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        // setTimeInSec((prev) => prev + 1);
        setTimeInSec((prev) => {
          return prev + 1;
        });
      }, 1000); //st1
    }

    return () => {
      console.log("Cleaning up interval...");
      clearInterval(intervalId);
    };
  }, [isTimerRunning]);

  const handlePause = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    }
  };
  const handleResume = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }
  };
  const handleLap = () => {
    setLaps((prev) => {
      const temp = [...prev];
      temp.push({ sec: sec, min: min, hour: hrs });
      return temp;
    });
  };
  const handleReset = () => {
    setTimeInSec(0);
    setIsTimerRunning(false);
  };

  const sec = Math.floor(timeInSec % 60)
    .toString()
    .padStart(2, "0");
  const min = Math.floor((timeInSec % 3600) / 60)
    .toString()
    .padStart(2, "0");

  const hrs = Math.floor(timeInSec / 3600)
    .toString()
    .padStart(2, "0");
  return (
    <div className="stopWatch-container">
      <h2 className="time-display">
        {hrs}:{min}:{sec}
      </h2>
      {isTimerRunning ? (
        <button className="watch-btn" onClick={handlePause}>
          Pause
        </button>
      ) : (
        <button className="watch-btn" onClick={handleResume}>
          Play
        </button>
      )}
      <button className="watch-btn" onClick={handleReset}>
        Reset
      </button>
      <button className="watch-btn" onClick={handleLap}>
        Lap
      </button>

      <div className="lap-box">
        {lap.map((elem, idx) => {
          return (
            <p key={idx} className="lap-item">
              {elem.hour}:{elem.min}:{elem.sec}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
