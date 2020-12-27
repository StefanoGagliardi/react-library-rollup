import { Field } from './field';
import { FormConfiguration } from './form';

// Main components and his props
export type MagicFormGeneratorProps = {
  form: FormConfiguration;
};

// Header components and his props
export type FormHeadingProps = {
  title?: string;
  subTitle?: string;
};

export type FormFieldsProps = {
  fields: Field[];
};
