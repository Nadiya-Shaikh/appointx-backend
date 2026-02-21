import mongoose from "mongoose";

const connectDB = async () => {
    // try {
    //     const mongoURI = process.env.MONGODB_URI;
    //     console.log("Connecting to MongoDB...");
    //     console.log("URI:", mongoURI); // Check what this prints
        
    //     // Don't modify the URI, use it as is
    //     await mongoose.connect(mongoURI);
        
    //     console.log("✅ MongoDB Connected Successfully");
    //     console.log("Database:", mongoose.connection.db.databaseName);
        
    // } catch (error) {
    //     console.error("❌ MongoDB Connection Error:", error.message);
    //     console.error("Full error:", error);
    //     process.exit(1);
    // }
    // mongoose.connection.on('connected', () => console.log("Database Connected"))
    // await mongoose.connect(`${process.env.MONGODB_URI}/appointx`)

    try {
    console.log("Connecting to:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Database Connected in mongoose");
  } catch (error) {
    console.log("❌ Full Error:", error);
  }

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.