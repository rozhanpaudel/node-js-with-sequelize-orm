const express = require("express");
const { not } = require("joi");
const router = require("./routes/router");

const app = express();

const morganLogger = require("morgan");

app.use(express.static("public"));

app.use(morganLogger("dev"));

app.use("/api", router);
app.get("/", (req, res, next) => {
  res.render("index.html");
});

app.use((req, res, next) => {
  const notFoundErr = new Error("Not Found");
  notFoundErr.status = 404;
  next(notFoundErr);
});

app.use((err, req, res, next) => {
  if (err.isJoi == true) {
    const errorMessages = err.details.map((elem) => {
      return {
        message: elem.message,
        field: elem.path,
      };
    });
    return res.status(422).json({
      errors: {
        errorMessages,
      },
    });
  } else {
    res.status(err.status || 500).json({
      errors: {
        message: err.message,
      },
    });
  }
});

module.exports = app;
