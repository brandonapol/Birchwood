"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const contactController_1 = __importDefault(require("../controllers/contactController"));
// const contactController = require('../controllers/contactController')
router.route('/').get(contactController_1.default.getContacts).post(contactController_1.default.setContact);
router.route('/:id').delete(contactController_1.default.deleteContact).put(contactController_1.default.updateContact);
exports.default = router;
//# sourceMappingURL=contactRoutes.js.map