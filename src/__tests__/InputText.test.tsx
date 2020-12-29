/* eslint-disable @typescript-eslint/no-var-requires */
import '@testing-library/jest-dom/extend-expect';
import { configure, mount } from 'enzyme';
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

// Import package for rendering
import React from 'react';
import { shallow } from 'enzyme';
import InputText from '../fields/InputText';
import { FieldValidation } from '../types';

describe('Hi, first Typescript unit test', () => {
  it('First simple unit test', () => {
    const a = 5;
    expect(a).toEqual(5);
  });

  it('renders snapshots, too', () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('InputText render', () => {
    const validationConfig: FieldValidation = {
      required: {
        value: true,
        message: 'Test',
      },
    };

    const wrapper = mount(
      <div>
        <InputText
          id="InputTextTest"
          name="InputTextTest"
          validation={validationConfig}
        />
      </div>,
    );

    const testProps = wrapper.find({ class: 'invalid-feedback' });
    expect(testProps.length).toEqual(1);
  });
});
