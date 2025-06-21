console.log("hello");

let newDate = null;

const handleDateChange = (e) => {
  newDate = new Date(e.target.value);
  const targetmilliseconds = newDate.getTime();
  console.log("targetmilliseconds : ", targetmilliseconds);
  const currentmilliseconds = Date.now();
  console.log("currentmilliseconds : ", currentmilliseconds);
  const diffInSec = (targetmilliseconds - currentmilliseconds) / 1000;
  console.log("diff : ", diffInSec);
};
