
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

// MongoDB Message Schema
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

const Message = mongoose.model(
  "Message",
  messageSchema,
  "contact_messages"
);
// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running!");
});

// Save Contact Messages
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (
      ![name, email, subject, message].every(
        (value) => typeof value === "string" && value.trim()
      )
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return res.status(400).json({
        message: "One or more fields are too long"
      });
    }

    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });

    await newMessage.save();

    res.status(201).json({
      message: "Message saved successfully!"
    });

  } catch (error) {
    console.error("Error saving message:", error);

    res.status(500).json({
      message: "Failed to save message"
    });
  }
});

// Connect MongoDB and Start Server
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(process.env.MONGO_URI, {
  dbName: "portfolio"
});

    console.log("MongoDB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

module.exports = app;
