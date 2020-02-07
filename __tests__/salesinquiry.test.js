const timeout = 30000;

describe('camella-salesinquiry', () => {
    let page;

    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto('https://www.camella.com.ph');
        await page.setViewport({width: 1920, height: 1080 });
    }, timeout);

    afterAll(async () => {
        await page.close(); 
    });

    it('should navigate to sales inquiry page', async () => {

        await page.waitForXPath("//div[@id='dialog']");
        await page.click("button[id='close']");
        await page.waitForXPath("//a[contains(text(),'Inquire Now')]");
        await page.click("#myNavbar > div > div.col-md-8.nav-col > ul > li.active.inquire_now > a");
        await page.waitForXPath("//li[@class='active']//a[contains(text(),'Sales Inquiry')]");
        expect(await page.url()).toBe('https://www.camella.com.ph/inquiries/sales');     
    }, 10000);
});