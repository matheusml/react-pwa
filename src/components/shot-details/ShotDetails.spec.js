import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ShotDetails from './ShotDetails';

const props = {
  params: {
    id: 1,
  },
};

test('Snapshot', () => {
  let component = renderer.create(
    <ShotDetails {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('ShotDetails', () => {
  test('has state', () => {
    const component = shallow(
      <ShotDetails {...props} />
    );
    expect(component.state()).toEqual({ shot: null });
  });

  describe('when state is null', () => {
    test('has text', () => {
      const component = shallow(
        <ShotDetails {...props} />
      );
      expect(component.text()).toBe('');
    });
  });

  describe('when state is defined', () => {
    test('has text', () => {
      const component = shallow(
        <ShotDetails {...props} />
      );

      const shot = {
        title: 'title',
        description: 'description',
        user: {
          avatar_url: 'avatar_url',
          html_url: 'html_url',
          name: 'name',
        },
        created_at: '2010-01-01',
        images: {
          normal: 'normal'
        },
      };

      component.setState({ shot });
      
      expect(component.html()).toContain(shot.title);
      expect(component.html()).toContain(shot.description);
      expect(component.html()).toContain(shot.user.avatar_url);
      expect(component.html()).toContain(shot.user.html_url);
      expect(component.html()).toContain(shot.user.name);
      expect(component.html()).toContain(shot.images.normal);
      expect(component.html()).toContain(shot.created_at);
    });
  });
});
