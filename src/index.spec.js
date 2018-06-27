import { Square } from './Figures/Square';
import { Rectangle } from './Figures/Rectangle';

describe('Test Square', function () {
    it('Test getArea method', function () {
        let square = new Square(4);

        expect(square.getArea()).toBe(16);
    });
});
describe('Test Rectangle', function () {
    it('Test getArea method', function () {
        let rectangle = new Rectangle(4, 2);

        expect(rectangle.getArea()).toBe(8);
    });
});