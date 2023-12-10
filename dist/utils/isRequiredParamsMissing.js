"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequiredParamsMissing = void 0;
/**
 * Checks if required parameters are missing from the provided request body.
 *
 * @param {Request} request - The request object.
 * @param {string[]} requiredParams - An array containing all required parameters.
 * @returns {string[]} - An array of missing required parameters. If all required parameters are present, an empty array is returned.
 */
const isRequiredParamsMissing = (request, requiredParams) => {
    return requiredParams.filter((param) => request.body[param] === undefined);
};
exports.isRequiredParamsMissing = isRequiredParamsMissing;
