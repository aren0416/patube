import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const handleHome = (req, res) => res.send("HOME!!");

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", handleHome);

export default app;
