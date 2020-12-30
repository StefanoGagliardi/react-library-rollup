// Import core
import React from 'react';
import { mount } from 'enzyme';
// import { renderHook } from '@testing-library/react-hooks';

import FormTest from '../testComponent/FormTestJest';

describe('Test Enzyme and debug with a TestComponent', () => {
  it('Test FormTest rendering', () => {
    const wrapper = mount(<FormTest title="Test title" />);
    expect(wrapper.find('.wrapper_test_1').length).toBe(1);
  });

  it('Test FormTest child component rendering with context - no props no state', () => {
    const wrapper = mount(
      <FormTest title="Test title" childTitle="Test child title" />,
    );
    expect(wrapper.find('.wrapper_child_test_1').length).toBe(1);
  });

  it('Test FormTest child input componente render', () => {
    const wrapper = mount(
      <FormTest title="Test title" childTitle="Test child title" />,
    );
    expect(wrapper.find('.test_input_wrapper').length).toBe(1);
  });
});
