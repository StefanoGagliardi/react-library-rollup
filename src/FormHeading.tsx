import React, { ReactElement } from 'react';
import { FormHeadingProps } from './types';

export const FormHeading: React.FC<FormHeadingProps> = (
  props: FormHeadingProps,
): ReactElement => {
  const { title, subTitle } = props;

  const newLine = (string: string): JSX.Element[] => {
    if (!string) {
      return [<></>];
    }
    const ret = string
      .split('\n')
      .map((str: string, index: number) => <p key={index}>{str}</p>);
    return ret;
  };

  if (title === '' && subTitle === '') {
    return <></>;
  }

  if (title === '') {
    return (
      <div className="row">
        <h3 className="fg__subtitle">{newLine(subTitle as string)}</h3>
      </div>
    );
  }

  if (subTitle === '') {
    return (
      <div className="row">
        <h3 className="fg__title">{title}</h3>
      </div>
    );
  }

  return (
    <header>
      <h3 className="fg__title">{title}</h3>
      <p className="fg__subtitle">{subTitle}</p>
    </header>
  );
};

export default FormHeading;
