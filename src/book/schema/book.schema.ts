import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: String,
  description: String,
});
