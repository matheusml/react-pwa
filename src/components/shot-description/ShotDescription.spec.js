import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ShotDescription from './ShotDescription';

const props = {
  id: 1,
  title: 'title',
  description: 'description',
  showDescription: true,
};

test('Snapshot', () => {
  let component = renderer.create(
    <ShotDescription {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component = renderer.create(
    <ShotDescription {...props} showDescription={false} />
  );
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('ShotDescription', () => {
  test('has texts', () => {
    let component = shallow(
      <ShotDescription {...props} />
    );
    expect(component.text()).toContain('Link');
    expect(component.html()).toContain(props.title);
    expect(component.html()).toContain(props.description);

    component = shallow(
      <ShotDescription {...props} showDescription={false} />
    );
    expect(component.text()).toContain('');
  });
});
