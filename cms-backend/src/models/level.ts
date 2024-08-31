// import mongoose, { Schema, Document } from 'mongoose';

// export interface ILevel extends Document {
//   name: string;
// }

// const LevelSchema: Schema = new Schema({
//   name: { type: String, required: true }
// });

// export default mongoose.model<ILevel>('Level', LevelSchema);

// backend/src/models/levelModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ILevel extends Document {
  name: string;
}

const LevelSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<ILevel>('Level', LevelSchema);


