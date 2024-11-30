import mongoose from "mongoose";

const connection = {}; // Declare connection outside the function for reusability.

export const connectToDB = async () => {
    try {
        // Check if already connected to avoid multiple connections
        if (connection.isConnected) return;

        const db = await mongoose.connect(
            "mongodb+srv://orrynbaia:alisher2007@cluster0.nyztgkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 30000, // 30 seconds
            }
        );

        console.log("Connection established successfully");
        connection.isConnected = db.connections[0].readyState; // 1 indicates connected
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Failed to connect to the database.");
    }
};