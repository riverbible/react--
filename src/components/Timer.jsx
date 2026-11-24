import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intevalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) {
      if (intevalRef.current) {
        clearInterval(intevalRef.current);
        intevalRef.current = null;
      }
      return
    }

    intevalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000)

    return () => {
      if (intevalRef.current) {
        clearInterval(intevalRef.current);
        intevalRef.current = null;
      }
    }
  }, [isRunning])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => setSeconds(0);
  return (
    <div>
      <p>{mm}:{ss}</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>중지</button>
      <button onClick={reset}>리셋</button>
    </div>
  )
}

export default Timer
