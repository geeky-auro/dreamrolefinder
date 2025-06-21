const { chromium } = require("playwright");
const Job = require("../models/job.js");

async function scrapeExampleJobs() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com/jobs");

  const jobs = await page.$$eval(".job-card", (cards) =>
    cards.map((card) => ({
      title: card.querySelector(".title")?.innerText,
      company: card.querySelector(".company")?.innerText,
      location: card.querySelector(".location")?.innerText,
      url: card.querySelector("a")?.href,
    }))
  );

  await Job.insertMany(jobs, { ordered: false }).catch(() => {});
  await browser.close();
}

module.exports = scrapeExampleJobs;
