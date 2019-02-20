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
      await page.waitForSelector('#inner-page-navigation');
      expect(await page.title()).toBe('Camella | House and Lot Developer Philippines | Official Website | Camella');     
    });

    it('should verify contact numbers in header', async () => {
        await page.waitForSelector('#inner-page-header-top');
        let contactNumber = await page.$eval('#inner-page-header-top > div > div.col-xs-6.col-md-3 > span', (cn) => {
            return cn.innerText;
        });
        expect(contactNumber).toBe('(02) 226 3552 LOCAL 0501| 0926 915 9138');
    });

    it('should verify camella fb url', async () => {
        let fbURL = await page.$eval('#inner-page-header-top > div > div.col-md-offset-2.col-md-7.text-right > span > a:nth-child(1)', (fb) => {
            return fb.href;
        });
        expect(fbURL).toBe('http://www.facebook.com/CamellaOfficial');
    });

    it('should verify camella youtube url', async () => {
        let ytURL = await page.$eval('#inner-page-header-top > div > div.col-md-offset-2.col-md-7.text-right > span > a:nth-child(2)', (yt) => {
            return yt.href;
        });
        expect(ytURL).toBe('http://www.youtube.com/c/CamellaOfficial');
    });

    it('should verify camella instagram url', async () => {
        let igURL = await page.$eval('#inner-page-header-top > div > div.col-md-offset-2.col-md-7.text-right > span > a:nth-child(3)', (ig) => {
            return ig.href;
        });
        expect(igURL).toBe('http://www.instagram.com/CamellaOfficial');
    });

    it('should verify camella twitter url', async () => {
        let twitterURL = await page.$eval('#inner-page-header-top > div > div.col-md-offset-2.col-md-7.text-right > span > a:nth-child(4)', (twitter) => {
            return twitter.href;
        });
        expect(twitterURL).toBe('http://www.twitter.com/CamellaOfficial');
    });

    it('should verify camella linkedin url', async () => {
        let linkedInURL = await page.$eval('#inner-page-header-top > div > div.col-md-offset-2.col-md-7.text-right > span > a:nth-child(5)', (li) => {
            return li.href;
        });
        expect(linkedInURL).toBe('https://www.linkedin.com/company/camella');
    });

    it('should verify camella linkedin url', async () => {
        let linkedInURL = await page.$eval('#inner-page-header-top > div > div.col-md-offset-2.col-md-7.text-right > span > a:nth-child(6)', (li) => {
            return li.href;
        });
        expect(linkedInURL).toBe('http://m.me/CamellaOfficial');
    });
});