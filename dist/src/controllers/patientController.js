import { readFileSync } from "fs";
const patients = JSON.parse(readFileSync(`../../dev-data/data/patients-simple.json`, "utf-8"));
export const getAllPatients = (req, res) => {
    res.status(200).json({
        status: "success",
        result: patients.length,
        data: {
            patients,
        },
    });
};
export const getPatient = (req, res) => {
    const medicalRecordNumber = req.params.medical_record_number.toUpperCase();
    const patient = patients.find((el) => el.medical_record_number == medicalRecordNumber);
    if (!patient) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid Medical Record Number",
        });
    }
    res.status(200).json({
        status: "success",
        data: {
            patient,
        },
    });
};
export const postNewPatient = (req, res) => {
    console.log(req.body);
    res.send("Done");
};
