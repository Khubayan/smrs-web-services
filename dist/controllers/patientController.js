"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postNewPatient = exports.getPatient = exports.getAllPatients = exports.isValidRequest = exports.isValidMedicalRecordNumber = void 0;
const fs_1 = require("fs");
const isRequiredParamsMissing_1 = require("../utils/isRequiredParamsMissing");
const patientRequiredParams_1 = __importDefault(require("../const/patientRequiredParams"));
const patients = JSON.parse((0, fs_1.readFileSync)(`../dev-data/data/patients-simple.json`, "utf-8"));
const isValidMedicalRecordNumber = (req, res, next, val) => {
    const formatedMedicalRecordNumber = val.toUpperCase();
    const patient = patients.find((el) => el.medical_record_number === formatedMedicalRecordNumber);
    console.info(`Requested data on MRN: ${formatedMedicalRecordNumber} ${patient ? "success" : "fail"}.`);
    if (!patient) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid Medical Record Number",
        });
    }
    next();
};
exports.isValidMedicalRecordNumber = isValidMedicalRecordNumber;
const isValidRequest = (req, res, next) => {
    const missingParams = (0, isRequiredParamsMissing_1.isRequiredParamsMissing)(req, patientRequiredParams_1.default);
    if (missingParams.length !== 0) {
        return res.status(400).json({
            status: "fail",
            message: `Missing ${missingParams}`,
        });
    }
    next();
};
exports.isValidRequest = isValidRequest;
const getAllPatients = (req, res) => {
    res.status(200).json({
        status: "success",
        result: patients.length,
        data: {
            patients,
        },
    });
};
exports.getAllPatients = getAllPatients;
const getPatient = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            patient: patients.find((el) => el.medical_record_number ===
                req.params.medical_record_number.toUpperCase()),
        },
    });
};
exports.getPatient = getPatient;
const postNewPatient = (req, res) => {
    // console.log(req.body, "sss");
    res.send("Done");
};
exports.postNewPatient = postNewPatient;
