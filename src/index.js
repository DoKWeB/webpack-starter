import { Square } from './Figures/Square';
import { Rectangle } from './Figures/Rectangle';
import './index.scss';

let square = new Square(4),
    rectangle = new Rectangle(2, 4);

console.log(`Square area is ${square.getArea()}. Rectangle area is ${rectangle.getArea()}`);