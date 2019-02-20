const timeout = 20000;

describe('camella-condominium', () => {
    let page;

    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto('https://www.camella.com.ph');
        await page.setViewport({width: 1920, height: 1080 });
    }, timeout);

    afterAll(async () => {
        await page.close(); 
    });

    it('should navigate to condominium page', async () => {
      await page.waitForSelector('#inner-page-navigation');
      await page.click('#myNavbar > div > div.col-md-8.nav-col > ul > li:nth-child(3) > a');
      await page.waitForSelector('#properties-house-catalogue');
      expect(await page.url()).toBe('https://www.camella.com.ph/properties/condominium');     
    });
});