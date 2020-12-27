import * as React from 'react';
import { MagicFormGeneratorProps } from './types/props';

export const MagicFormGenerator: React.FC<MagicFormGeneratorProps> = (
  props: MagicFormGeneratorProps,
): React.ReactElement => {
  const { testProps1 } = props;
  return (
    <div>
      <h1>Magic Form Generator</h1>
      {testProps1 && <h2>{testProps1}</h2>}
    </div>
  );
};

export default MagicFormGenerator;
