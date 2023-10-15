const express = require("express");
const productRouter = require("./routes/product.router");
const userRouter = require("./routes/user.router");
const db = require("./config/dbConfig");
const port = 3300;

// starting db connection once server starts
db.connectToMongoDB();

// instatiating express
const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

// Handle errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.send({
    error: err.message,
  });
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
