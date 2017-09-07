import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Shot from './Shot';

const props = {
  id: 1,
  image: 'image',
  viewsCount: 17,
  likesCount: 23,
  date: '2010-10-10',
  title: 'title',
  description: 'description',
};

test('Snapshot', () => {
  const component = renderer.create(
    <Shot {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Shot', () => {
  test('initial state', () => {
    const component = shallow(
      <Shot {...props} />
    );
    expect(component.state()).toEqual({ showDescription: false });
  });

  test('has texts', () => {
    const component = shallow(
      <Shot {...props} />
    );
    expect(component.text()).toContain('ShotDescription');
    expect(component.text()).toContain('17');
    expect(component.text()).toContain('23');
    expect(component.text()).toContain('2010-10-10');
  });

  test('toggle', () => {
    const component = shallow(
      <Shot {...props} />
    );
    component.instance().toggle();
    expect(component.state()).toEqual({ showDescription: true });

    component.instance().toggle();
    expect(component.state()).toEqual({ showDescription: false });
  });
});
