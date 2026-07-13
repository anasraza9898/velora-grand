import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";

const root = process.cwd();
const port = 4173;
const base = `http://127.0.0.1:${port}`;
const routes = ["/", "/venue", "/celebrations", "/gallery", "/packages", "/about", "/contact", "/missing"];
const widths = [320, 360, 393, 414, 768, 1024, 1440, 1920];
const failures = [];
const consoleErrors = [];

const server = spawn("node", ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", String(port)], {
  cwd: root,
  stdio: "pipe",
  shell: false,
});

async function waitForServer() {
  const started = Date.now();
  while (Date.now() - started < 25000) {
    try {
      const response = await fetch(base);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw new Error("Preview server did not start");
}

function record(condition, message) {
  if (!condition) failures.push(message);
}

try {
  await waitForServer();
  await mkdir("qa-screenshots", { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  for (const route of routes) {
    const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
    record(Boolean(response?.ok()), `${route} did not load`);
    const h1 = await page.locator("h1").first().textContent();
    record(Boolean(h1?.trim()), `${route} has no visible h1`);
  }

  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 700 ? 900 : 1000 });
    await page.goto(base, { waitUntil: "networkidle" });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    record(overflow <= 1, `Horizontal overflow on home at ${width}px: ${overflow}px`);
    const heroBox = await page.locator("h1").first().boundingBox();
    record(Boolean(heroBox && heroBox.width <= width), `Hero heading overflows at ${width}px`);
  }

  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.getByLabel("Open navigation menu").click();
  record(await page.getByRole("dialog", { name: "Mobile navigation" }).isVisible(), "Mobile menu did not open");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(350);
  record(!(await page.getByRole("dialog", { name: "Mobile navigation" }).isVisible().catch(() => false)), "Mobile menu did not close with Escape");

  await page.goto(base, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "Walima" }).click();
  await page.waitForTimeout(350);
  record((await page.locator(".selector-card h3").textContent()) === "Walima", "Celebration selector did not switch");

  await page.goto(`${base}/gallery`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Nikah", exact: true }).click();
  await page.locator(".gallery-tile").first().click();
  record(await page.getByRole("dialog", { name: /Floral Nikah|Emerald Stage|Blue Hour|Grand Hall/ }).isVisible().catch(() => page.locator(".lightbox").isVisible()), "Gallery lightbox did not open");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(350);
  record(!(await page.locator(".lightbox").isVisible().catch(() => false)), "Gallery lightbox did not close with Escape");

  await page.goto(`${base}/contact`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /Plan on WhatsApp/ }).click();
  record(await page.getByText("Enter a full name.").isVisible(), "Booking form does not show validation after submit");
  await page.addInitScript(() => {
    window.__openedWhatsApp = "";
    window.open = (url) => {
      window.__openedWhatsApp = String(url);
      return null;
    };
  });
  await page.reload({ waitUntil: "networkidle" });
  await page.getByLabel("Full Name").fill("Demo Client");
  await page.getByLabel("Phone Number").fill("+92 300 111 2222");
  await page.getByLabel("Event Type").selectOption("Baraat");
  await page.getByLabel("Preferred Event Date").fill("2026-12-20");
  await page.getByLabel("Estimated Guest Count").fill("450");
  await page.getByLabel("Preferred Visit Day").fill("Saturday");
  await page.getByLabel("Preferred Visit Time").selectOption("Evening");
  await page.getByRole("button", { name: /Plan on WhatsApp/ }).click();
  const opened = await page.evaluate(() => window.__openedWhatsApp);
  record(opened.includes("wa.me/923000000000") && opened.includes("Demo%20Client"), "WhatsApp message generation failed");

  await page.locator(".faq-item button").nth(1).click();
  record(await page.locator(".faq-answer").nth(1).isVisible(), "FAQ accordion did not open");

  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.screenshot({ path: "qa-screenshots/home-mobile-393.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.screenshot({ path: "qa-screenshots/home-desktop-1440.png", fullPage: true });
  await browser.close();

  if (consoleErrors.length) {
    failures.push(`Console errors: ${consoleErrors.join(" | ")}`);
  }

  if (failures.length) {
    console.error(failures.join("\n"));
    process.exitCode = 1;
  } else {
    console.log("QA passed");
  }
} finally {
  server.kill();
}
