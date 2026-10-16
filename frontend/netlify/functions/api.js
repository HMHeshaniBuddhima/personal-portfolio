const serverless = require("serverless-http");
const mongoose = require("mongoose");
const app = require("../../../backend/server");

let connectionPromise;

async function connectDB() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not configured");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGO_URI, {
      dbName: "portfolio"
    }).catch((error) => {
      connectionPromise = null;
      throw error;
    });
  }

  await connectionPromise;
}

const handler = serverless(app);

exports.handler = async (event, context) => {
  try {
    await connectDB();
    console.log("MongoDB connection state:", mongoose.connection.readyState);
    return await handler(event, context);
  } catch (error) {
    console.error("Backend error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Backend connection failed"
      })
    };
  }
};