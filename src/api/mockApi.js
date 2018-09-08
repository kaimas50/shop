/* eslint import/prefer-default-export: 0 */
import doritos from './images/doritos.jpg';
import dew from './images/honey-dew.jpg';
import sriracha from './images/sriracha.jpg';
import soba from './images/soba.jpg';
import leffe from './images/leffe.jpg';
import ryeBread from './images/rye-bread.jpg';

export function getAllItems() {
  return [
    newItem('Doritos', 'Doritos Cool Original Tortilla Chips', doritos, '4.99'),
    newItem('Honey Dew', "Fuller's Honey Dew Golden Organic Ale 500ml", dew, '2.33'),
    newItem('Sriracha Sauce', 'Flying Goose Sriracha Hot Chilli Sauce', sriracha, '2.43'),
    newItem('Nissin Noodles', 'Nissin Soba Chilli Instant Noodles', soba, '1.23'),
    newItem('Leffe Brune', 'Leffe Brune Belgian Beer 750ml', leffe, '3.00'),
    newItem('Rye Bread', 'Biona Organic Yeast Free Vitality Rye Bread with Sprouted Seeds', ryeBread, '2.00'),
  ];
}

let id = 0;
function newItem(name, desc, imgSrc, price) {
  id += 1;
  return {
    id,
    name,
    desc,
    imgSrc,
    price,
  };
}
