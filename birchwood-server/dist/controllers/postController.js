"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const asyncHandler = require('express-async-handler')
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const postModel_1 = __importDefault(require("../models/postModel"));
// * to be used when multiple bloggers are writing
// const getID = async ( req: IRequest ): Promise<any> => {
//     let token: string | undefined;
//     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1]
//             const decoded = jwt.verify(token, process.env.JWT_SECRET || '')
//             if (typeof decoded === 'object') {
//                 const user = await User.findById(decoded.id).select('-password')
//                 return user
//             }
//         } catch {
//             throw new Error('Cannot find user in GetID')
//         }
//     }
// }
const getPosts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield postModel_1.default.find({});
        res.status(200).json(posts);
    }
    catch (_a) {
        res.status(400);
        throw new Error('Could not get posts');
    }
}));
const setPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.title || !req.body.author || !req.body.content) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const post = postModel_1.default.create({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    });
    res.status(200).json(post);
}));
// @desc    Update post
// @route   PUT /api/:id
// @access  Private
const updatePost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield postModel_1.default.findById(req.params.id);
    // * Works with no user connected or required
    if (!post) {
        res.status(400);
        throw new Error('Post not found');
    }
    // // get currently logged in user's ID
    // const userID = await getID(req)
    // // get rest of logged in user's data based off their ID
    // const user = await User.findById(userID)
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }
    // ensure logged in user matches contact user
    // TODO pls fix & redo migration
    // if (post.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }
    const updatedPost = yield postModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedPost);
}));
// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield postModel_1.default.findById(req.params.id);
    if (!post) {
        res.status(400);
        throw new Error('post not found');
    }
    yield post.remove();
    res.status(200).json({ id: req.params.id });
}));
const postController = {
    getPosts,
    setPost,
    updatePost,
    deletePost
};
exports.default = postController;
//# sourceMappingURL=postController.js.map