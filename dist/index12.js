"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
const UserSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Name should be greater than 3 characters" }),
    email: zod_1.z.string().email({ message: "Enter valid Email!" }),
    age: zod_1.z.number().min(8).optional()
});
app.use(express_1.default.json());
app.put('/update', function (req, res) {
    const { success } = UserSchema.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            Error: "Please give valid inputs!"
        });
        return;
    }
    const updatedBody = req.body;
    res.json({
        message: "User updated"
    });
});
app.listen(3000);
