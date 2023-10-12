const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.router");
const productRouter = require("./routes/product.router");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.status(200).send({
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
  console.log(`Server is listening on port ${port}`);
});
