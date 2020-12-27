/* eslint-disable @typescript-eslint/no-var-requires */
import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';

describe('Hi, first Typescript unit test', () => {
  it('First simple unit test', () => {
    const a = 5;
    expect(a).toEqual(5);
  });

  it('renders', () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>,
    );
    expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/);
  });

  it('renders snapshots, too', () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
