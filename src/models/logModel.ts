import mongoose, { Document, Schema } from "mongoose";

interface ILog extends Document {
  table: string;
  event: string;
  params?: object;
  request?: object;
  response?: object;
  uid?: string;
  timestamp?: Date;
  response_timestamp?: Date;
  latency?: number;
}

const logSchema: Schema = new Schema({
  table: { type: String, required: true },
  event: { type: String, required: true },
  params: { type: Object },
  request: { type: Object },
  response: { type: Object },
  uid: { type: String },
  timestamp: { type: Date, default: Date.now, index: { expires: "45d" } },
  response_timestamp: { type: Date },
  latency: { type: Number, default: 0 }, // in milliseconds
});

const Log = mongoose.model<ILog>("Log", logSchema);

export default Log;
