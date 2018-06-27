export const openNonAngularPage = (browser, url) => {
    browser.waitForAngularEnabled(false);
    browser.get(url);
};