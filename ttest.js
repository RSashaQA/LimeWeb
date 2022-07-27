const puppeteer = require("puppeteer");
const userName1 = "testt12@gmail.com";
const userName2 = "testtt12@gmail.com";
const userPassword1 = "qqqqqq";

function delay(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time)
	});
}

async function testLime() {
    const browser = await puppeteer.launch({
        args: ['--start-maximized'],
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: false,
        defaultViewport: {
            height: 1920,
            width: 1080,
            isMobile: false,
            hasTouch: false,
            isLandscape: false
        },
        devtools: false,
        dumpio: false
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080});
    await page.goto("https://new.limehd.tv/signup", {waitUntil: 'networkidle2'});
    console.log('Open limehd.tv');
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > div > form > label:nth-child(1) > input", userName1);
    await delay(1000);
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > div > form > label:nth-child(2) > input", userPassword1);
    await delay(1000);
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > div > form > label:nth-child(3) > input", userPassword1);
    await delay(1000);
    await page.click("#__layout > main > div.login__container > div > div.login__form > div > div > button");
    await delay(1000);
    await page.click("#__layout > main > div.login__container > div > div.login__form > div > div > a");
    await delay(5000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__link > div");
    await delay(3000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__link > div");
    await delay(1000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__menu-container > div > ul > a:nth-child(1)");
    await delay(4000);
    let pageTest1 = await page.$eval('#__layout > div > div.default__layout > div > div.profile__title-container > h1', el => el.innerText);
    await delay(1000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__link > div");
    await delay(3000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__link > div");
    await delay(1000);  
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__menu-container > div > span")
    await delay(5000);   
    await page.goto("https://new.limehd.tv/signup")
    await delay(5000);
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > div > form > label:nth-child(1) > input", userName2);
    await delay(1000);
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > div > form > label:nth-child(2) > input", userPassword1);
    await delay(1000);
    await page.type("#__layout > main > div.login__container > div > div.login__form > div > div > form > label:nth-child(3) > input", userPassword1);
    await delay(1000);
    await page.click("#__layout > main > div.login__container > div > div.login__form > div > div > button");
    await delay(1000);
    await page.click("#__layout > main > div.login__container > div > div.login__form > div > div > a");
    await delay(5000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__link > div");
    await delay(3000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__link > div");
    await delay(1000);
    await page.click("#__layout > div > header > div.user__wrapper.page-header__user > div > div > div.user__menu-container > div > ul > a:nth-child(1)");
    await delay(4000);
    let pageTest2 = await page.$eval('#__layout > div > div.default__layout > div > div.profile__title-container > h1', el => el.innerText);
    if (pageTest1 != pageTest2) {
        console.log("NICE");
    } else {
        console.log("BAD");
    }
    console.log(pageTest1, pageTest2);
    await delay(2000);
}
testLime();