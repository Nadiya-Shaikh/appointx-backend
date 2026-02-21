import mongoose from 'mongoose';
import 'dotenv/config';

const testConnection = async () => {
  try {
    console.log('URI:', process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected!');
    console.log('Database:', mongoose.connection.db.databaseName);
    mongoose.disconnect();
  } catch (error) {
    console.error('❌ Failed:', error.message);
  }
};

testConnection();