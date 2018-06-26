import {openNonAngularPage} from './helpers';
import {mainUrl} from "./constants";

describe('Protractor first test', () => {
	beforeEach(() => {
		openNonAngularPage(browser, mainUrl);
	});
	
	it('should have a title', () => {
		expect(browser.getTitle()).toEqual('Page title');
	});
	it('should have a h1', () => {
		expect(element(by.css('h1')).getText()).toEqual('Page title');
	});
});