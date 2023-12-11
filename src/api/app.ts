import express from "express";

import morgan from "morgan";
import patientRouter from "../routes/patientRoutes";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
console.log(process.env.NODE_ENV, "env");
app.use("/api/v1/patients", patientRouter);
export default app;
