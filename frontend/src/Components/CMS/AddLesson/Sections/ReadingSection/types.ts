import mongoose, { Document, Schema } from 'mongoose';

interface TooltipWord {
  word: string;
  tooltip: string;
}

interface IReadingText extends Document {
  text: string;
  tooltipWords: TooltipWord[];
}

const TooltipWordSchema: Schema = new Schema({
  word: { type: String, required: true },
  tooltip: { type: String, required: true },
});

const ReadingTextSchema: Schema = new Schema({
  text: { type: String, required: true },
  tooltipWords: { type: [TooltipWordSchema], required: true },
});

export default mongoose.model<IReadingText>('ReadingText', ReadingTextSchema);
