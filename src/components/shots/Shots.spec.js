import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Shots from './Shots';

test('Snapshot', () => {
  let component = renderer.create(
    <Shots />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Shots', () => {
  test('has state', () => {
    const component = shallow(
      <Shots />
    );
    expect(component.state()).toEqual({ 
      page: 1,
      perPage: 16,
      shots: [], 
    });
  });

  describe('when state is null', () => {
    test('does not contain Shots', () => {
      const component = shallow(
        <Shots />
      );
      expect(component.text()).not.toContain('Shot');
    });
  });

  describe('when state is defined', () => {
    test('does not contain Shots', () => {
      const component = shallow(
        <Shots />
      );
      const shot = {
        id: 1,
        created_at: '2010-01-01',
        images: {
          teaser: 'teaser',
        },
        title: 'title',
        description: 'description',
        views_count: 13,
        likes_count: 14,
      };
      component.setState({ shots: [ shot ]});

      expect(component.text()).toContain('Shot');
      expect(component.html()).toContain(shot.id);
      expect(component.html()).toContain(shot.created_at);
      expect(component.html()).toContain(shot.images.teaser);
      expect(component.html()).toContain(shot.views_count);
      expect(component.html()).toContain(shot.likes_count);
    });
  });

  describe('onScroll', () => {
    test('updates the page', () => {
      const component = shallow(
        <Shots />
      );
      window.innerHeight = 0;
      window.scrollY = 0;
      document.body.scrollHeight = 1;
      component.instance().onScroll();
      expect(component.state().page).toEqual(1);

      window.innerHeight = 1;
      window.scrollY = 1;
      document.body.scrollHeight = 0;
      component.instance().onScroll();
      expect(component.state().page).toEqual(2);
    });
  });
});

