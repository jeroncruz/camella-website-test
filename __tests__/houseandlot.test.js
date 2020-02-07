const timeout = 30000;

describe('camella-houseandlot', () => {
    let page;

    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto('https://www.camella.com.ph');
        await page.setViewport({width: 1920, height: 1080 });
    }, timeout);

    afterAll(async () => {
        await page.close(); 
    });

    it('should navigate to house and lot page', async () => {
        await page.waitForXPath("//div[@id='dialog']");
        await page.click("button[id='close']");
        await page.waitForXPath("//a[contains(text(),'House Models')]");
        await page.click("#myNavbar > div > div.col-md-8.nav-col > ul > li:nth-child(2) > a");
        await page.waitForXPath("//h3[@class='header']");
        expect(await page.url()).toBe('https://www.camella.com.ph/properties/house-and-lot');     
    });
});