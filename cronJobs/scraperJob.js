const cron = require("node-cron");
const scrapeExampleJobs = require("../scrapers/jpmcScrapper.js");
const sendEmail = require("../services/mailer");

cron.schedule("0 9 * * *", async () => {
  console.log("🔁 Running daily scrape...");
  await scrapeExampleJobs();
  await sendEmail("Daily Scrape Done", "The job scraping task has completed.");
});
