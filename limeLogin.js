const puppeteer = require("puppeteer")
const userName1 = "STPLIME999@gmail.com"
const userName2 = "TEST777@gmail.com"
const userPassword1 = "qqqqqq"

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

async function testLime() {
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
  })
  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })
    if (await page.goto("https://limehd.tv/login", { waitUntil: "networkidle2" })) {
      console.log("Website limehd.tv is UP")
    } else { console.error("BAD website is DOWN") };
    await delay(2000)
    await page.type(
      "#__layout > main > div.login__container > div > div.login__form > div > form > label:nth-child(1) > input",
      userName1
    )
    await delay(2000)
    await page.type(
      "#__layout > main > div.login__container > div > div.login__form > div > form > label:nth-child(2) > input",
      userPassword1
    )
    await delay(2000)
    await page.click(
      "#__layout > main > div.login__container > div > div.login__form > div > button"
    )
    await delay(5000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(3000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(2000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__menu-container > div > ul > a:nth-child(1)"
    )
    await delay(4000)
    let pageTest1 = await page.$eval(
      "#__layout > div > div.default__layout > div > div.profile__title-container > h1",
      (el) => el.innerText
    )
    await delay(2000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(3000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(2000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__menu-container > div > span"
    )
    await delay(5000)
    await page.goto("https://limehd.tv/login")
    await delay(5000)
    await page.type(
      "#__layout > main > div.login__container > div > div.login__form > div > form > label:nth-child(1) > input",
      userName2
    )
    await delay(2000)
    await page.type(
      "#__layout > main > div.login__container > div > div.login__form > div > form > label:nth-child(2) > input",
      userPassword1
    )
    await delay(2000)
    await page.click(
      "#__layout > main > div.login__container > div > div.login__form > div > button"
    )
    await delay(5000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(3000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(2000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__menu-container > div > ul > a:nth-child(1)"
    )
    await delay(4000)
    let pageTest2 = await page.$eval(
      "#__layout > div > div.default__layout > div > div.profile__title-container > h1",
      (el) => el.innerText
    )
    if (pageTest1 != pageTest2) {
      console.log("NICE")
    } else {
      console.error("BAD " + pageTest1 + ' == ' + pageTest2)
    }
    await delay(2000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(3000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div > div"
    )
    await delay(2000)
    await page.click(
      "#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__menu-container > div > span"
    )
    console.log("Finish")
    await delay(2000)
  } catch {
    console.error("somethink wrong")
  }
  await browser.close()
}
testLime()
