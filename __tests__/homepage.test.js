const timeout = 20000;

describe('camella-homepage', () => {
    let page;

    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto('https://www.camella.com.ph');
        await page.setViewport({width: 1920, height: 1080 });
    }, timeout);

    afterAll(async () => {
        await page.close(); 
    });

    it('should verify the homepage title page', async () => {
      await page.waitForXPath("//div[@id='dialog']");
      expect(await page.title()).toBe('Camella | House and Lot Developer Philippines | Official Website | Camella');     
    });


    it('should verify camella fb url', async () => {
        
        let fbURL = await page.$eval("body.ng-scope:nth-child(2) div.header-top div:nth-child(1) div.container div.col-md-offset-2.col-md-6.text-right span:nth-child(1) > a:nth-child(1)", (fb) => {
            return fb.href;
        });
        expect(fbURL).toBe('https://www.facebook.com/CamellaOfficial');
    });


    it('should verify camella instagram url', async () => {
        let igURL = await page.$eval("body.ng-scope:nth-child(2) div.header-top div:nth-child(1) div.container div.col-md-offset-2.col-md-6.text-right span:nth-child(1) > a:nth-child(2)", (ig) => {
            return ig.href;
        });
        expect(igURL).toBe('https://www.instagram.com/camellaofficial/');
    });

    it('should verify camella twitter url', async () => {
        let twitterURL = await page.$eval("body.ng-scope:nth-child(2) div.header-top div:nth-child(1) div.container div.col-md-offset-2.col-md-6.text-right span:nth-child(1) > a:nth-child(3)", (twitter) => {
            return twitter.href;
        });
        expect(twitterURL).toBe('https://www.twitter.com/CamellaOfficial');
    });

    it('should verify camella linkedin url', async () => {
        let linkedInURL = await page.$eval("body.ng-scope:nth-child(2) div.header-top div:nth-child(1) div.container div.col-md-offset-2.col-md-6.text-right span:nth-child(1) > a:nth-child(5)", (li) => {
            return li.href;
        });
        expect(linkedInURL).toBe('https://www.linkedin.com/company/camella');
    });

    it('should verify camella messenger url', async () => {
        let messengerURL = await page.$eval("body.ng-scope:nth-child(2) div.header-top div:nth-child(1) div.container div.col-md-offset-2.col-md-6.text-right span:nth-child(1) > a:nth-child(6)", (messenger) => {
            return messenger.href;
        });
        expect(messengerURL).toBe('https://m.me/CamellaOfficial');
    });
});
