import { Schema, Document, Types } from "mongoose";

export interface IImage {
  key: string;
  url: string;
  size: number;
  name: string;
}

export interface IProject extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  techStack: string[]; // Array of strings
  githubUrl?: string; // Optional
  liveUrl?: string; // Optional
  imageUrls: IImage[]; // Array of image objects
  createdAt?: Date;
  updatedAt?: Date;
}

export const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: false },
    githubUrl: { type: String, required: false },
    liveUrl: { type: String, required: true },
    imageUrls: [
      {
        key: { type: String, required: true },
        url: { type: String, required: true },
        size: { type: Number, required: true },
        name: { type: String, required: true },
      },
    ],
  },
  { timestamps: true },
);
