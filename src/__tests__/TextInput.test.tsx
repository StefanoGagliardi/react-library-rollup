// Import core
import React, { ReactElement } from 'react';
import { mount } from 'enzyme';

// Third packages
import { useForm, FormProvider } from 'react-hook-form';
import InputText from '../fields/InputText';

describe('Test Enzyme and debug with a TestComponent', () => {
  it('RHF - Create context - wrapper component', () => {
    const RHFContext: React.FC = (): ReactElement => {
      return <div className="rhf__context_wrapper">wrapper</div>;
    };

    const wrapper = mount(<RHFContext />);
    expect(wrapper.find('.rhf__context_wrapper').length).toBe(1);
  });

  it('RHF - Create context - Context', () => {
    // Context wrapper component
    const RHFContext: React.FC = (): ReactElement => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <div className="rhf__context_wrapper">wrapper</div>
        </FormProvider>
      );
    };

    const wrapper = mount(<RHFContext />);
    expect(wrapper.find('.rhf__context_wrapper').length).toBe(1);
  });

  it('RHF - Create context - Init form', () => {
    // Context wrapper component
    const RHFContext: React.FC = (): ReactElement => {
      const methods = useForm();
      const handleSubmit = () => {
        console.log('handleSubmit form');
      };
      return (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleSubmit)}
            id="formElement"
            noValidate
          >
            <div className="rhf__context_wrapper">wrapper</div>
          </form>
        </FormProvider>
      );
    };

    const wrapper = mount(<RHFContext />);
    expect(wrapper.find('#formElement').length).toBe(1);
  });

  it('RHF - Create context - Add input', () => {
    // Context wrapper component
    const RHFContext: React.FC = (): ReactElement => {
      const methods = useForm();
      const handleSubmit = () => {
        console.log('handleSubmit form');
      };
      return (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleSubmit)}
            id="formElement"
            noValidate
          >
            <div className="rhf__context_wrapper">
              <InputText
                id="textInput"
                name="textInput"
                validation={{}}
                placeholder="Intert text..."
                autocomplete="off"
              />
            </div>
          </form>
        </FormProvider>
      );
    };

    const wrapper = mount(<RHFContext />);
    expect(wrapper.find('input').length).toBe(1);
  });

  it('RHF - Create context - Error wrapper', () => {
    // Context wrapper component
    const RHFContext: React.FC = (): ReactElement => {
      const methods = useForm();
      const handleSubmit = () => {
        console.log('handleSubmit form');
      };
      return (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleSubmit)}
            id="formElement"
            noValidate
          >
            <div className="rhf__context_wrapper">
              <InputText
                id="textInput"
                name="textInput"
                validation={{}}
                placeholder="Intert text..."
                autocomplete="off"
              />
            </div>
          </form>
        </FormProvider>
      );
    };

    const wrapper = mount(<RHFContext />);
    expect(wrapper.find('.invalid-feedback').length).toBe(1);
  });
});
