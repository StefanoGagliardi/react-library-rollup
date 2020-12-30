// Import core
import React from 'react';
import { mount, shallow } from 'enzyme';
// import { renderHook } from '@testing-library/react-hooks';

// Import custom package
import { FormConfiguration } from '../types';
import MagicFormGenerator from '../MagicFormGenerator';
// NB: FormConfiguration is a type of MagicFormGenerator
const formConfigSubmit: FormConfiguration = {
  title: 'Fourth form generated - Submit handling',
  subTitle: 'Gestione del submit con eventuali callback',
  submit: {
    endpoint: 'http://localhost:5000/formSubmit',
    method: 'POST',
    backend: true,
    onSubmit: (data: any) => {
      return data;
    },
  },
  buttonSubmit: {
    text: 'Registrati',
    loading: true,
    dom: 'button',
    block: false,
    layout: '1/3',
    class: 'custom-submit-class',
    id: 'submitID',
  },
  fields: [
    {
      type: 'text',
      label: 'Nome',
      layout: '1/3',
      id: 'firstName',
      name: 'firstName',
      placeholder: 'Inserisci il tuo nome',
      validation: {
        required: {
          value: true,
          message: 'Devi inserire il tuo nome',
        },
      },
      autocomplete: 'off',
    },
    {
      type: 'text',
      label: 'Cognome',
      layout: '1/3',
      id: 'lastName',
      name: 'lastName',
      placeholder: 'Inserisci il tuo cognome',
      validation: {
        required: {
          value: true,
          message: 'Devi inserire il tuo cogonme',
        },
      },
      autocomplete: 'off',
    },
    {
      type: 'password',
      label: 'Password',
      layout: '1/3',
      id: 'password',
      name: 'password',
      placeholder: 'Inserire una password',
      validation: {
        required: true,
      },
      autocomplete: 'current-passowrd',
    },
  ],
};

describe('Form wrapper render', () => {
  it('Form wrapper test by ID', () => {
    const wrapper = mount(<MagicFormGenerator form={formConfigSubmit} />);
    expect(wrapper.find('#MagicFormGenerator').length).toBe(1);
  });

  it('Form render by tag', () => {
    const wrapper = shallow(<MagicFormGenerator form={formConfigSubmit} />);
    expect(wrapper.find('form').length).toBe(1);
  });
});
