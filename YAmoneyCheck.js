const puppeteer = require("puppeteer")
const userName1 = "STPLIME999@gmail.com"
const userPassword1 = "qqqqqq"

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

async function testYAmoney() {
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
  page
    .on('console', message => console.log(`${message.type().substr(0, 10).toUpperCase()} ${message.text()}`))
    .on('pageerror', ({ message }) => console.error(message))
    .on('requestfailed', request => console.error(`${request.failure().errorText} ${request.url()}`))
  try {
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("https://limehd.tv/subscribes/4");
    await delay(2000)
    await page.click('#__layout > div > main > div > div.pack__wrapper > div > div.pack__info > div.pack__info-container > div > button')
    await delay(2000)
    await page.click('#__layout > main > div.login__container > div > div.login__form > div > div > div > a')
    await delay(2000)
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > form > label:nth-child(1) > input", userName1)
    await delay(2000)
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > form > label:nth-child(2) > input", userPassword1)
    await delay(2000)
    await page.click("#__layout > main > div.login__container > div > div.login__form > div > button")
    await delay(10000)
    await browser.close()
    console.log('checking done')
  } catch { console.log('somethink wrong') };
}
testYAmoney()