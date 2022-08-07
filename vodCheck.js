const puppeteer = require("puppeteer");
function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time)
    })
  }
  async function testVOD() {
    const browser = await puppeteer.launch({
      args: ["--start-maximized"],
      headless: true,
      defaultViewport: {
        height: 1920,
        width: 1080,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      },
    });
    try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("https://limehd.tv/movies");
    await delay(2000);
    let vodTest = await page.$eval("#__layout > div > div > div > div > h1", (el) => el.innerText);
      if (vodTest == "Онлайн-кинотеатр скоро...") {console.log("good")}
      else { console.error("bad VOD is avalible?") };
    } catch {console.error("somethink wrong")};
    await browser.close()
}
testVOD()