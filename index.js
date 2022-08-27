const puppeteer = require("puppeteer");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://leetcode.com/Justin_Peng_pjc/", {
    waitUntil: "networkidle0",
  });
  const element = await page.waitForSelector(".font-medium.text-label-1"); // select the element
  const value = await element.evaluate((el) => el.textContent);
  console.log(value);
  browser.close();
})();
