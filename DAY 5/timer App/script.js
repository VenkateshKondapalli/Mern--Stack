const parent = document.getElementById("timer-text");
let newDate = null;

const handleTimerApp = (e) => {
  newDate = new Date(e.target.value);
  const selectedDate = newDate.getTime();
  const currentDate = Date.now();
  console.log(currentDate);
  const diff = (selectedDate - currentDate) / 1000;
  if (diff < 0) {
    diff = diff * -1;
  }
  const timeInSec = Math.floor(diff);
  const sec = timeInSec % 60;
  const min = Math.floor(timeInSec / 60) % 60;
  const hrs = Math.floor(timeInSec / 3600);

  //   console.log(sec, min, hrs);

  const currentTime = Math.floor(currentDate);
  const currentSec = timeInSec % 60;
  const currentMin = Math.floor(timeInSec / 60) % 60;
  const currentHour = Math.floor(timeInSec / 3600);

  
};
