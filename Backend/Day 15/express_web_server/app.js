const express = require("express");
const {
  getAllDataFromArrayFromFile,
  saveObjectToArrayInFile,
  editObjectFromArrayFromFile,
  deleteObjectFromArrayFromFile,
} = require("./file-helper");

const filePath = "./StudentDB.json";
const app = express();

app.use(express.json());

// GET all students
app.get("/api/v1/students", async (req, res) => {
  try {
    const studentArr = await getAllDataFromArrayFromFile(filePath);
    res.json({
      isSuccess: true,
      message: "List of students retrieved successfully",
      data: studentArr,
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Failed to retrieve student data",
    });
  }
});

// POST a new student
app.post("/api/v1/students", async (req, res) => {
  try {
    const data = req.body;
    const newObj = await saveObjectToArrayInFile(data, filePath);

    res.status(201).json({
      isSuccess: true,
      message: "Student added successfully",
      data: newObj,
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// PATCH (update specific fields of a student)
app.patch("/api/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const reqEditContent = req.body;

    await editObjectFromArrayFromFile(reqEditContent, studentId, filePath);

    res.json({
      isSuccess: true,
      message: "Student updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
      data: {},
    });
  }
});

// PUT (replace entire student object)
app.put("/api/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const getContentToUpdate = req.body;

    await editObjectFromArrayFromFile(getContentToUpdate, studentId, filePath);

    res.json({
      isSuccess: true,
      message: "Student data replaced successfully",
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
});

// DELETE a student
app.delete("/api/v1/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;

    await deleteObjectFromArrayFromFile(studentId, filePath);

    res.json({
      isSuccess: true,
      message: `Student with ID ${studentId} deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({
      isSuccess: false,
      message: "Internal Server Error",
    });
  }
});

// Start server
app.listen(2700, () => {
  console.log(" Server is running ");
});
