const puppeteer = require("puppeteer")

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

async function testGeoBlock() {
  const browser = await puppeteer.launch({
    args: ["--start-maximized"],
    headless: false,
    defaultViewport: {
      height: 1920,
      width: 1080,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
      dumpio: false
    },
  });
  const page = await browser.newPage()
  try {
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("https://limehd.tv/channel/1kanal");
    await delay(2000)
    try {
      await page.waitForSelector(".video__title", {timeout: 10000})
    } catch (err) { console.error('Channel is avalible, GeoBlock is not working!!!')}
    let GeoBlock = await page.$eval(".video__title", (el) => el.innerText)
    if (GeoBlock == 'Извинитe') {console.log('good')}
    else //{console.error('Channel is avalible, GeoBlock is not working!!!')}
    {await browser.close()}
    console.log('checking done')
  } catch (err) {console.error('somethink wrong, check GeoBlock')};
}
testGeoBlock()