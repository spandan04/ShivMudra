import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });
  page.on('response', response => {
    if (!response.ok()) {
      console.log('RESPONSE NOT OK:', response.url(), response.status());
    }
  });
  
  console.log("Navigating to http://localhost:3001...");
  try {
    const response = await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 10000 });
    console.log("Status:", response.status());
    
    const content = await page.content();
    console.log("HTML length:", content.length);
    if (content.length < 5000) {
      console.log("HTML snippet:", content.substring(0, 1000));
    }
  } catch (e) {
    console.log("Navigation error:", e.message);
  }
  
  await browser.close();
})();
