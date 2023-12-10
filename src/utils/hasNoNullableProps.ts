import { Patient } from "../types/PatientType";

type NonNullableObject = {
  [K in keyof Patient]: NonNullable<Patient[K]>;
};

export const hasNonNullableProperties = (
  obj: Patient
): obj is NonNullableObject =>
  Object.values(obj).every((value) => value !== null && value !== undefined);
