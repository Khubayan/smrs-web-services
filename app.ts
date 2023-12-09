import express, { Request, Response } from "express";
import { readFileSync } from "fs";

const app = express();

const patients: [] = JSON.parse(
  readFileSync(`./dev-data/data/patients-simple.json`, "utf-8")
);

app.get("/api/v1/patients", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    result: patients.length,
    data: {
      patients,
    },
  });
});

const port: number = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
