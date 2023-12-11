"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "./config.env",
});
const index_1 = __importDefault(require("./api/index"));
// console.log(process.env);
const port = process.env.PORT || 3000;
index_1.default.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
