import './App.css';
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [breakLength, setBreakLength] = useState(5); // Break length in minutes
  const [sessionLength, setSessionLength] = useState(25); // Session length in minutes
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); // Time left in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer state (running or paused)
  const sound = new Audio(`${process.env.PUBLIC_URL}/plantain.mp3`);
  // Convert seconds to MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Increment/Decrement break length
  const incrementBreak = () => {
    if (breakLength < 60) setBreakLength(breakLength + 1);
  };

  const decrementBreak = () => {
    if (breakLength > 1) setBreakLength(breakLength - 1);
  };

  // Increment/Decrement session length
  const incrementSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      if (!isRunning) setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const decrementSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      if (!isRunning) setTimeLeft((sessionLength - 1) * 60);
    }
  };
 const playSound = () => {
    sound.play().catch((error) => console.error("Error playing sound:", error));
  };
  // Timer functionality
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
			 playSound();
            return breakLength * 60; // Switch to break time
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, breakLength]);

  const startStopTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="App">
      <center>
        <div className="d-flex flex-column align-items-center" id="chrono-container">
          <h1>Chronometer 25+5</h1>

          <div className="d-flex justify-content-between w-50 mb-3">
            <div>
              <h3 id="break-label">Break Length</h3>
              <button id="break-decrement" onClick={decrementBreak}>-</button>
              <span id="break-length">{breakLength}</span>
              <button id="break-increment" onClick={incrementBreak}>+</button>
            </div>
            <div>
              <h3 id="session-label">Session Length</h3>
              <button id="session-decrement" onClick={decrementSession}>-</button>
              <span id="session-length">{sessionLength}</span>
              <button id="session-increment" onClick={incrementSession}>+</button>
            </div>
          </div>

          <div id="timer-label" className="border rounded p-3">
            <h2>{isRunning ? "Session" : "Paused"}</h2>
            <h3 id="time-left">{formatTime(timeLeft)}</h3>
          </div>

          <div className="mt-3">
            <button id="start_stop" onClick={startStopTimer}>
              {isRunning ? "Pause" : "Start"}
            </button>
            <button id="reset" onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </center>
    </div>
  );
 
}

export default Timer;