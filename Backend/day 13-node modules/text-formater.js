// commonjs modules
console.log("------ ! Loading text-formatter.js file ---------");

const username = "Mohan";

const getCapitalizedText = (txt) => {
  if (typeof txt !== "string") return ""; // ✅ Fix: ensure txt is a valid string
  const words = txt.split(" ");
  const resArr = words.map((elem) => {
    if (!elem) return ""; // ✅ Fix: avoid error if elem is empty
    const firstChar = elem[0].toUpperCase(); //g
    const remainingWord = elem.slice(1).toLowerCase(); //OOD
    return `${firstChar}${remainingWord}`; // `Good`
  });
  return resArr.join(" ");
};

const getCamelCaseText = (txt) => {
  if (typeof txt !== "string") return ""; // ✅ Fix: ensure txt is a valid string
  const words = txt.split(" ");
  const resArr = words.map((elem, idx) => {
    if (!elem) return ""; // ✅ Fix: avoid error if elem is empty
    if (idx !== 0) {
      const firstChar = elem[0].toUpperCase(); //g
      const remainingWord = elem.slice(1).toLowerCase(); //OOD
      return `${firstChar}${remainingWord}`; // `Good`
    } else {
      return elem.toLowerCase();
    }
  });
  return resArr.join("");
};

console.log("--------->username", username);

console.log(
  "------ ! Exporting the exports from text-formatter.js file ---------"
);

module.exports = {
  getCapitalizedText: getCapitalizedText,
  getCamelCaseText: getCamelCaseText,
}; //export
