import express from "express";
import router from "./routes/patientRoutes";
const app = express();
app.use("/api/v1/patients", router);
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
