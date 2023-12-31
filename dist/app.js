"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const patientRoutes_1 = __importDefault(require("./routes/patientRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
if (process.env.NODE_ENV === "development")
    app.use((0, morgan_1.default)("dev"));
console.log(process.env.NODE_ENV, "env");
app.use("/api/v1/patients", patientRoutes_1.default);
exports.default = app;
