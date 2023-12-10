import express from "express";
import { getAllPatients, getPatient, postNewPatient, } from "../controllers/patientController";
const router = express.Router();
router.route("/").get(getAllPatients).post(postNewPatient);
router.route("/:id").get(getPatient);
export default router;
