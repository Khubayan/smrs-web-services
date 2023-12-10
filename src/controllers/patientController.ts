import { NextFunction, Request, Response } from "express";
import { readFileSync } from "fs";
import { Patient } from "../types/PatientType";
import { hasNonNullableProperties } from "../utils/hasNoNullableProps";
import { isRequiredParamsMissing } from "../utils/isRequiredParamsMissing";
import patientRequiredParams from "../const/patientRequiredParams";

const patients: [] = JSON.parse(
  readFileSync(`./dev-data/data/patients-simple.json`, "utf-8")
);

export const isValidMedicalRecordNumber = (
  req: Request,
  res: Response,
  next: NextFunction,
  val: string
) => {
  const formatedMedicalRecordNumber = val.toUpperCase();
  const patient = patients.find(
    (el: Patient) => el.medical_record_number === formatedMedicalRecordNumber
  );

  console.info(
    `Requested data on MRN: ${formatedMedicalRecordNumber} ${
      patient ? "success" : "fail"
    }.`
  );

  if (!patient) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Medical Record Number",
    });
  }

  next();
};

export const isValidRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const missingParams: string[] = isRequiredParamsMissing(
    req,
    patientRequiredParams
  );

  if (missingParams.length !== 0) {
    return res.status(400).json({
      status: "fail",
      message: `Missing ${missingParams}`,
    });
  }

  next();
};

export const getAllPatients = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    result: patients.length,
    data: {
      patients,
    },
  });
};

export const getPatient = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    data: {
      patient: patients.find(
        (el: Patient) =>
          el.medical_record_number ===
          req.params.medical_record_number.toUpperCase()
      ),
    },
  });
};
export const postNewPatient = (req: Request, res: Response) => {
  // console.log(req.body, "sss");
  res.send("Done");
};
