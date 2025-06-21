const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Job Management Portal API is live!");
});

// Manual trigger route
const scrapeExampleJobs = require("./scrapers/jpmcScrapper.js");
app.get("/scrape", async (req, res) => {
  await scrapeExampleJobs();
  res.send("Scraping complete!");
});

// Start Cron Jobs
require("./cronJobs/scraperJob");

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
