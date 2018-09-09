import React from 'react';
import renderer from 'react-test-renderer';
import SaleItem from '../SaleItem';
import canFish from './can-fish.jpg';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <SaleItem
        id="1"
        name="Sale Item"
        desc="Description"
        imgSrc={canFish}
        price="50"
        onChange={() => null}
        value={4}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
