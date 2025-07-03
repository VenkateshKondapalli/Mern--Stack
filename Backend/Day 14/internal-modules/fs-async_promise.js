const fspromises = require("node:fs/promises"); // better import for promise version

const main = async () => {
  console.log("\n-----Start----\n");
  try {
    const response1 = await fspromises.readFile("./temp.txt", "utf-8");

    console.log(response1);
  } catch (err) {
    console.log("comming error for temp.txt");
  }

  console.log("\n-------- MID ---------\n");
  try {
    const response2 = await fspromises.readFile("./student.txt", "utf-8");

    console.log(response2);
  } catch (err) {
    console.log("comming error for student.txt");
  }

  console.log("\n------END----\n");
};

main();
