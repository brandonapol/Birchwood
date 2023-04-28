"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const postController_1 = __importDefault(require("../controllers/postController"));
router.route('/').get(postController_1.default.getPosts).post(postController_1.default.setPost);
router.route('/:id').delete(postController_1.default.deletePost).put(postController_1.default.updatePost);
exports.default = router;
//# sourceMappingURL=postRoutes.js.map