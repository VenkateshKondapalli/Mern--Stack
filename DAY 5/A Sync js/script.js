console.log("START");
const timeDelayInMs = 10000;

const callbackFunc = () => {
  console.log("hello");
};

// window.setTimeout(callbackFunc, timeDelayInMs);
window.setInterval(callbackFunc, timeDelayInMs);

console.log("END");
