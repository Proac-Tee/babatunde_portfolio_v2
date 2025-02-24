import mongoose, { Model } from "mongoose";
import { IProject, ProjectSchema } from "./schema";

// Export the Mongoose model
const ProjectModel: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default ProjectModel;
