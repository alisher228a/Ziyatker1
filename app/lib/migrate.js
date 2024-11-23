import mongoose from "mongoose";
import { News, Ministries, Project } from "./models.js"; 

const migrate = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await News.updateMany({}, { $set: { desc_kz: "", desc_en: "" } });
    console.log("Migration for News completed successfully.");

    await Ministries.updateMany({}, { $set: { title: "" } });
    console.log("Migration for Ministries completed successfully.");

    await Project.updateMany({}, { $set: { title_kz: "", title_en: "", desc_kz: "", desc_en: "", goal_kz: "", goal_en: "", achievements_kz: "", achievements_en: "", tasks_kz: "", tasks_en: "" } });
    console.log("Migration for Projects completed successfully.");

    await mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Migration failed:", error);
  }
};

migrate();
