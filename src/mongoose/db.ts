"use server";
import mongoose from "mongoose";

/*
 * This file ensures a single database connection across the codebase.
 * It caches the connection to avoid creating multiple instances.
 */

// Load the database URI from the environment variable
const MONGODB_URI = process.env.DB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local",
  );
}

// Define a cached connection outside the module scope
let cachedConnection: mongoose.Connection | null = null;
let cachedPromise: Promise<mongoose.Connection> | null = null;

export const db = async (): Promise<mongoose.Connection> => {
  if (cachedConnection) return cachedConnection; // Return if already connected

  if (!cachedPromise) {
    cachedPromise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => mongoose.connection)
      .catch((e) => {
        console.error("MongoDB connection error:", e);
        throw e; // Propagate error to the caller
      });
  }

  cachedConnection = await cachedPromise;
  return cachedConnection;
};

export default db;
