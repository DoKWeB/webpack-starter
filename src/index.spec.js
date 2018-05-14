import sum from './index';

describe('Test sum function', function () {
	it('sum(1, 2) should be 3', function () {
		expect(sum(1, 2)).toBe(3);
	});
});