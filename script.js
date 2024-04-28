let stopwatchInterval;
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;

  function startStopwatch() {
    if (!stopwatchInterval) {
      stopwatchInterval = setInterval(updateStopwatch, 10);
    }
  }

  function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }

  function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
  }

  function updateStopwatch() {
    milliseconds += 10;
    if (milliseconds == 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }

  function updateDisplay() {
    const formattedMilliseconds = String(milliseconds).padStart(3, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    document.querySelector('.stopwatch').textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  }
