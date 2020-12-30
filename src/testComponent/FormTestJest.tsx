import React, { ReactElement } from 'react';

// Third packages
import { useForm, FormProvider } from 'react-hook-form';
import { FieldBase } from '../types';

interface IProps {
  title: string;
  childTitle?: string;
}

export const FormTest: React.FC<IProps> = (props: IProps): ReactElement => {
  const { title, childTitle } = props;

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="wrapper_test_1">
        <div className="wrapper_test_2">
          <h2>{title}</h2>
        </div>
        {childTitle && <FormTestChild childTitle={childTitle} />}
        <TestInputText
          id="testInput"
          name="testInput"
          placeholder="Insert text..."
          validation={{}}
          autocomplete="off"
        />
      </div>
    </FormProvider>
  );
};

export default FormTest;

interface IPropsChild {
  childTitle: string;
}

export const FormTestChild: React.FC<IPropsChild> = (
  props: IPropsChild,
): ReactElement => {
  const { childTitle } = props;

  const methods = useForm();
  if (methods) {
    console.log('Used var methods');
  }

  return (
    <div className="wrapper_child_test_1">
      <h3>{childTitle}</h3>
    </div>
  );
};

export const TestInputText: React.FC<FieldBase> = (
  props: FieldBase,
): ReactElement => {
  const { id, name, placeholder, validation, autocomplete } = props;

  if (validation) {
    console.log('Test input props validation');
  }

  if (autocomplete) {
    console.log('Test input props autocomplete');
  }

  return (
    <div className="test_input_wrapper">
      <div className="form-group">
        <label htmlFor="">Label input</label>
        <p>{id && <>{id}</>}</p>
        <p>{name && <>{name}</>}</p>
        <p>{placeholder && <>{placeholder}</>}</p>
      </div>
    </div>
  );
};
