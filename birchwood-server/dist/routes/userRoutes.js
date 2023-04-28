"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController_1 = __importDefault(require("../controllers/userController"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
router.post('/', userController_1.default.registerUser);
router.post('/login', userController_1.default.loginUser);
router.get('/getme', authMiddleware_1.default, userController_1.default.getMe);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map