const http = require("http");

const app = http.createServer((req, res) => {
  console.log("----- req received -----", req.url);
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    switch (req.url) {
      case "/api/v1/students": {
        const obj = {
          isSuccess: true,
          message: "students data sending successfully",
          data: { name: "venkatesh", city: "vizag" },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      case "/api/v1/products": {
        const obj = {
          isSuccess: true,
          message: "Product data sending successfully",
          data: { title: "laptop", price: 59000, rating: 4.5 },
        };
        res.end(JSON.stringify(obj, null, 4));
        break;
      }
      default: {
        const obj = {
          isSuccess: false,
          message: "Invalid API endpoint",
        };
        res.end(JSON.stringify(obj, null, 4));
      }
    }
  } else {
    console.log(Object.keys(req));
    res.end("work in progress...");
  }
});

app.listen(2700, () => {
  console.log("------- Server is running --------");
});
