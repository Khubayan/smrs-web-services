"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientController_1 = require("../controllers/patientController");
const router = express_1.default.Router();
router.param("medical_record_number", patientController_1.isValidMedicalRecordNumber);
router.route("/").get(patientController_1.getAllPatients).post(patientController_1.isValidRequest, patientController_1.postNewPatient);
router.route("/:medical_record_number").get(patientController_1.getPatient);
exports.default = router;
