# 🧠 Job Portal Scraper

A Node.js-based web scraping and job tracking system that monitors job postings from company career pages using **Playwright**, stores them in **MongoDB**, and sends notifications via **Nodemailer**. It supports both manual and scheduled scraping using **Express** and **Node-cron**.

---

## 🚀 Features

- 🌐 Scrape job postings from multiple sources using Playwright
- 📅 Automatically run scrapers daily via Cron (9:00 AM by default)
- 💾 Store job data in MongoDB using Mongoose
- 📧 Get notified via email when new jobs are found
- ⚙️ REST endpoint to trigger scraping manually

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Playwright](https://playwright.dev/)
- [Mongoose + MongoDB](https://mongoosejs.com/)
- [Node-cron](https://www.npmjs.com/package/node-cron)
- [Nodemailer](https://nodemailer.com/)

---

## 👨‍💻 Author

Auro Saswat Raj <br>
Built for automated job tracking and personal productivity.
