/* eslint import/prefer-default-export: 0 */
/* eslint no-plusplus: 0 */
import doritos from './images/doritos.jpg';
import dew from './images/honey-dew.jpg';
import sriracha from './images/sriracha.jpg';
import soba from './images/soba.jpg';
import leffe from './images/leffe.jpg';
import ryeBread from './images/rye-bread.jpg';

export function getAllItems() {
  let id = 0;
  return [
    newItem(id++, 'Doritos', 'Doritos Cool Original Tortilla Chips', doritos, '4.99'),
    newItem(id++, 'Honey Dew', "Fuller's Honey Dew Golden Organic Ale 500ml", dew, '2.33'),
    newItem(id++, 'Sriracha Sauce', 'Flying Goose Sriracha Hot Chilli Sauce', sriracha, '2.43'),
    newItem(id++, 'Nissin Noodles', 'Nissin Soba Chilli Instant Noodles', soba, '1.23'),
    newItem(id++, 'Leffe Brune', 'Leffe Brune Belgian Beer 750ml', leffe, '3.00'),
    newItem(id++, 'Rye Bread', 'Biona Organic Yeast Free Vitality Rye Bread with Sprouted Seeds', ryeBread, '2.00'),
  ];
}

function newItem(id, name, desc, imgSrc, price) {
  return {
    id: `${id}`,
    name,
    desc,
    imgSrc,
    price,
  };
}
