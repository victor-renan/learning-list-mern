"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
// Chama o express
const app = (0, express_1.default)();
// Define a porta como 8000
const PORT = process.env.PORT || 8000;
//Usa rotas externas
app.use((0, cors_1.default)());
app.use(routes_1.default);
const uri = `mongodb+srv://${process.env.MONGO_USER}:
${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.gjwmny8.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(uri, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
    .catch(err => {
    throw err;
});
