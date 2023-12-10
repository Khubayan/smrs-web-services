import { Request } from "express";

/**
 * Checks if required parameters are missing from the provided request body.
 *
 * @param {Request} request - The request object.
 * @param {string[]} requiredParams - An array containing all required parameters.
 * @returns {string[]} - An array of missing required parameters. If all required parameters are present, an empty array is returned.
 */
export const isRequiredParamsMissing = (
  request: Request,
  requiredParams: string[]
): string[] => {
  return requiredParams.filter((param) => request.body[param] === undefined);
};
