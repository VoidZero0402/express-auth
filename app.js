const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const configs = require("./configs");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const authRouter = require("./routes/auth");

const app = express();

app.use(cors({ origin: "http://u8cgk4k04sgs084s4cowkogo.82.115.18.67.sslip.io", credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(configs.cookies.secret));

app.use("/api/auth", authRouter);

app.use(globalErrorHandler);

module.exports = app;
