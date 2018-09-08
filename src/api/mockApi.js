/* eslint import/prefer-default-export: 0 */
import doritos from './images/doritos.jpg';
import dew from './images/honey-dew.jpg';
import sriracha from './images/sriracha.jpg';
import soba from './images/soba.jpg';
import leffe from './images/leffe.jpg';

export function getAllItems() {
  return [
    newItem('Doritos', 'Doritos Cool Original Tortilla Chips', doritos),
    newItem('Honey Dew', "Fuller's Honey Dew Golden Organic Ale 500ml", dew),
    newItem('Sriracha Sauce', 'Flying Goose Sriracha Hot Chilli Sauce', sriracha),
    newItem('Nissin Noodles', 'Nissin Soba Chilli Instant Noodles', soba),
    newItem('Leffe Brune', 'Leffe Brune Belgian Beer 750ml', leffe),
  ];
}

let id = 0;
function newItem(name, desc, imgSrc) {
  id += 1;
  return {
    id,
    name,
    desc,
    imgSrc,
  };
}
