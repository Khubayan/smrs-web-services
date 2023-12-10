import express from "express";
import {
  getAllPatients,
  getPatient,
  isValidMedicalRecordNumber,
  isValidRequest,
  postNewPatient,
} from "../controllers/patientController";

const router = express.Router();

router.param("medical_record_number", isValidMedicalRecordNumber);
router.route("/").get(getAllPatients).post(isValidRequest, postNewPatient);
router.route("/:medical_record_number").get(getPatient);

export default router;
