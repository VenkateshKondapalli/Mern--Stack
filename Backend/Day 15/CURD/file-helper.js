// medium (**)
const fsPromises = require("fs/promises");

const { v4: uuid4 } = require("uuid");

// easy (*)
const getAllDataFromArrayFromFile = async (filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> return empty array
  // if it is able to parse --> return the parsed array

  try {
    const txt = await fsPromises.readFile(filePath, "utf-8");
    try {
      const data = JSON.parse(txt);
      return data;
    } catch {
      console.warn(
        "file si correpetd or not a valid json format .Resetting it"
      );

      await fsPromises.writeFile(filePath, "[]", "utf-8");
      return [];
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn("creating file");
      await fsPromises.writeFile(filePath, "[]", "utf-8");
      return [];
    }
    console.error("error  reading the file", err.message);
    return null;
  }
};

const saveArrayToFile = async (arr, filePath) => {
  try {
    const stringyfiedArr = JSON.stringify(arr, null, 4);
    await fsPromises.writeFile(filePath, stringyfiedArr, "utf-8");
  } catch {
    console.err("error in saving file", err.message);
  }
};

const saveObjectToArrayInFile = async (obj, filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> put the object in new empty array
  // else push the object in the parsed array
  // ...
  // then convert the array to JSON and store the file
  const arr = await getAllDataFromArrayFromFile(filePath);
  obj.id = uuid4();
  arr.push(obj);
  await saveArrayToFile(arr, filePath);
};

// difficult (****)
const editObjectFromArrayFromFile = async (
  newObjProperties,
  elemId,
  filePath
) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> show the error in the console ---> object does not exists
  // if it is able to parse --> get the particular from array using index
  //                        --> change the object as you want
  //                        --> ::save to the file::

  const arr = await getAllDataFromArrayFromFile(filePath);

  const idx = arr.findIndex((elem) => {
    if (elem.id === elemId) return true;
    else return false;
  });

  if (idx === -1) {
    console.err("Invalid id. No object found with given id");
    return arr;
  }

  const currentObj = arr[idx];
  const newObj = { ...currentObj, ...newObjProperties };

  arr[idx] = newObj;
  saveArrayToFile(arr, filePath);
};

// difficult (***)
const deleteObjectFromArrayFromFile = async (idx, filePath) => {
  // read the file
  // try to convert it into JS object using JSON.parse()
  // if there is any error --> file is empty
  //                       --> show the error in the console ---> object does not exists
  // if it is able to parse --> delete the object from the array
  //                        --> ::save the new array to the file::
};

module.exports = {
  saveObjectToArrayInFile,
  getAllDataFromArrayFromFile,
  editObjectFromArrayFromFile,
  deleteObjectFromArrayFromFile,
};
