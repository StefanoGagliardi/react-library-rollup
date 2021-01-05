import React, { ReactElement, useCallback } from 'react';

// Third packages
import { useForm, FormProvider } from 'react-hook-form';

// Custom packages
import { FormFields } from './FormFields';
import { FormHeading } from './FormHeading';
import FormButonSubmit from './FormButtonSubmit';
import { onSubmitBackendCall } from './Helpers';

// Import styles - With rollup add this as external in package.json
import './scss/styles.scss';
import { MagicFormGeneratorProps } from './types';

export const MagicFormGenerator: React.FC<MagicFormGeneratorProps> = (
  props: MagicFormGeneratorProps,
): ReactElement => {
  const { form } = props;
  const { submit, buttonSubmit } = form;

  // const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm();

  // NB: Visto che la callback del form è sempre uguale posso memorizzarla
  const handleSubmit = useCallback(async (data: any) => {
    // If callbck exists edit data in callback
    const dataBeforeSubmit = submit.onSubmit ? submit.onSubmit(data) : data;

    // If submitbackend is enabled send ajax data
    if (submit.backend) {
      // const res =
      await onSubmitBackendCall(
        submit.endpoint,
        submit.method,
        dataBeforeSubmit,
      );
    }
  }, []);

  return (
    <FormProvider {...methods}>
      <div id="MagicFormGenerator">
        <form onSubmit={methods.handleSubmit(handleSubmit)} noValidate>
          <FormHeading title={form.title} subTitle={form.subTitle} />
          <FormFields fields={form.fields} />
          <FormButonSubmit {...buttonSubmit} />
        </form>
      </div>
    </FormProvider>
  );
};

export default MagicFormGenerator;
