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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const Contact = require('../models/contactModel')
const contactModel_1 = __importDefault(require("../models/contactModel"));
// const User = require('../models/contactModel')
const userModel_1 = __importDefault(require("../models/userModel"));
const getID = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || '');
            if (typeof decoded === 'object') {
                const user = yield userModel_1.default.findById(decoded.id).select('-password');
                return user;
            }
        }
        catch (_a) {
            throw new Error('Cannot find user in GetID');
        }
    }
});
const getContacts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getID(req);
    try {
        if (user.id !== undefined) {
            const contacts = yield contactModel_1.default.find({ user });
            res.status(200).json(contacts);
        }
    }
    catch (_b) {
        res.status(400);
        throw new Error('No user submitted');
    }
}));
const setContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getID(req);
    if (!req.body.name || !req.body.email || !req.body.address || !req.body.phone_number) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const contact = contactModel_1.default.create({
        user: user.id,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone_number: req.body.phone_number,
    });
    res.status(200).json(contact);
}));
// @desc    Update contacts
// @route   PUT /api/:id
// @access  Private
const updateContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield contactModel_1.default.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error('Contact not found');
    }
    // get currently logged in user's ID
    const userID = yield getID(req);
    // get rest of logged in user's data based off their ID
    const user = yield userModel_1.default.findById(userID);
    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }
    // ensure logged in user matches contact user
    if (contact.user.toString() !== user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }
    const updatedContact = yield contactModel_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedContact);
}));
// @desc    Delete contacts
// @route   DELETE /api/goals/:id
// @access  Private
const deleteContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield contactModel_1.default.findById(req.params.id);
    if (!contact) {
        res.status(400);
        throw new Error('contact not found');
    }
    yield contact.remove();
    res.status(200).json({ id: req.params.id });
}));
const contactController = {
    getContacts,
    setContact,
    updateContact,
    deleteContact
};
exports.default = contactController;
//# sourceMappingURL=contactController.js.map