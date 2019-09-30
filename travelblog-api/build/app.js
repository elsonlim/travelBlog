"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default("combined"));
app.get("/health", (req, res) => res.json({ status: "up" }));
exports.default = app;
