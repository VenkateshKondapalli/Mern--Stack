const fs = require("node:fs");

console.log("\n-----Start----\n");

fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err.message);
    return;
  }
  console.log("temp.txt data---->", data);
});

console.log("\n-------- MID ---------\n");

fs.readFile("./student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err.message);
    return;
  }
  console.log("student.txt data---->", data);
});

console.log("\n------END----\n");
