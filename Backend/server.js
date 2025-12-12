const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");

// import Routes
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();
// ✅ Configure CORS properly
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("App is running");
});

// routse

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;

// ✅ Start server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
