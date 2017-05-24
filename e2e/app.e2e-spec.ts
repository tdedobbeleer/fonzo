import {FonzoAppPage} from "./app.po";

describe('fonzo-app App', function () {
    let page: FonzoAppPage;

    beforeEach(() => {
        page = new FonzoAppPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
