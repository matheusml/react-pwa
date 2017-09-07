import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router';

import Container from './Container';

const children = React.createElement('div');

test('Snapshot', () => {
  const component = renderer.create(
    <Container children={children} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
