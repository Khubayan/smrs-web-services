"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasNonNullableProperties = void 0;
const hasNonNullableProperties = (obj) => Object.values(obj).every((value) => value !== null && value !== undefined);
exports.hasNonNullableProperties = hasNonNullableProperties;
