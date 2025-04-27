import { access } from "node:fs/promises";

export const throwErrorIfExists = async (file) => {
  try {
    await access(file);
    throw new Error(`File already exists`);
  } catch (error) {
    if (error.message === `File already exists`) {
      throw new Error("FS operation failed");
    }
  }
};

export const throwErrorIfNotExists = async (file) => {
  try {
    await access(file);
  } catch {
    throw new Error("FS operation failed");
  }
};
