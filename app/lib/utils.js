import mongoose from "mongoose";

export const connectToDB = async () => {

    const connection = {}

    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect("mongodb+srv://orrynbaia:alisher2007@cluster0.nyztgkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
        });
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
};
