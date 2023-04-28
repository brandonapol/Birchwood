"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const port = process.env.PORT || 8000;
const db_1 = __importDefault(require("./config/db"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const cors_1 = __importDefault(require("cors"));
const corsMiddleware_1 = require("./middleware/corsMiddleware");
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsMiddleware_1.options));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/contacts', contactRoutes_1.default);
app.use('/api/blog', postRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use(errorMiddleware_1.default);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=server.js.map