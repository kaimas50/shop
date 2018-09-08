/* eslint import/prefer-default-export: 0 */
import doritos from './images/doritos.jpg';
import dew from './images/honey-dew.jpg';
import sriracha from './images/sriracha.jpg';

export function getAllItems() {
  return [
    newItem('Doritos', 'Doritos Cool Original Tortilla Chips', doritos),
    newItem('Honey Dew', "Fuller's Honey Dew Golden Organic Ale 500ml", dew),
    newItem('Sriracha Sauce', 'Flying Goose Sriracha Hot Chilli Sauce', sriracha),
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
