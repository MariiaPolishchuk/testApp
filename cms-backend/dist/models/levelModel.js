"use strict";
// import mongoose, { Schema, Document } from 'mongoose';
Object.defineProperty(exports, "__esModule", { value: true });
// export interface ILevel extends Document {
//   name: string;
// }
// const LevelSchema: Schema = new Schema({
//   name: { type: String, required: true }
// });
// export default mongoose.model<ILevel>('Level', LevelSchema);
// backend/src/models/levelModel.ts
const mongoose_1 = require("mongoose");
const levelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
const Level = (0, mongoose_1.model)('Level', levelSchema);
exports.default = Level;
