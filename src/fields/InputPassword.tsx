// Import core
import React, { ReactElement, useEffect, useState } from 'react';

// Import third parts
import { useFormContext, ValidationValueMessage } from 'react-hook-form';

// Import custom
import { FieldBase, FieldValidation } from '../types';

export const InputPassword: React.FC<FieldBase> = (
  props: FieldBase,
): ReactElement => {
  // const [invalid, setInvalid] = useState<boolean>(true);

  const { register, errors, watch } = useFormContext(); // retrieve all hook methods

  const [validation, setValidation] = useState<FieldValidation>({});
  const [minLength, setMinLength] = useState<number>(0);
  const [maxLength, setMaxLength] = useState<number>(0);

  // Build Validation Object
  // TODO Fare un custom hook per uesta serie di operazioni?
  useEffect(() => {
    // Copy reference props
    const rawValidation = props.validation;

    // If exists set minLength state for error message
    if (props.validation.minLength) {
      if ((props.validation.minLength as ValidationValueMessage).value) {
        setMinLength(
          parseInt(
            (props.validation.minLength as ValidationValueMessage)
              .value as string,
          ),
        );
      } else {
        setMinLength(parseInt(props.validation.minLength as string));
      }
    }

    // If exists set maxLength state for error  message
    if (props.validation.maxLength) {
      if ((props.validation.maxLength as ValidationValueMessage).value) {
        setMaxLength(
          parseInt(
            (props.validation.maxLength as ValidationValueMessage)
              .value as string,
          ),
        );
      } else {
        setMaxLength(parseInt(props.validation.maxLength as string));
      }
    }

    // Normalize equalTo validation with validate method
    if (
      props.validation.equalTo !== undefined &&
      (props.validation.equalTo as ValidationValueMessage).value
    ) {
      const equalToField = (props.validation.equalTo as ValidationValueMessage)
        .value as string;
      rawValidation.validate = (value: string) => value === watch(equalToField);
    }

    // Add regex for validate email pattern
    setValidation({
      ...rawValidation,
    });
  }, []);

  return (
    <>
      <input
        id={props.id}
        type="password"
        className={'form-control ' + (errors[props.name] ? 'is-invalid ' : ' ')}
        placeholder={props.placeholder}
        name={props.name}
        autoComplete={props.autocomplete ? props.autocomplete : 'off'}
        ref={register(validation)}
      />
      <div className="invalid-feedback">
        {errors[props.name]?.type == 'required' ? (
          <>
            {errors[props.name]?.message === '' ? (
              <span>Il campo password è richiesto</span>
            ) : (
              <span>{errors[props.name]?.message}</span>
            )}
          </>
        ) : (
          <></>
        )}
        {errors[props.name]?.type == 'minLength' ? (
          <>
            {errors[props.name]?.message === '' ? (
              <span>La lunghezza minima è {minLength} caratteri</span>
            ) : (
              <span>{errors[props.name]?.message}</span>
            )}
          </>
        ) : (
          <></>
        )}
        {errors[props.name]?.type == 'maxLength' ? (
          <>
            {errors[props.name]?.message === '' ? (
              <span>La lunghezza massima è {maxLength} caratteri</span>
            ) : (
              <span>{errors[props.name]?.message}</span>
            )}
          </>
        ) : (
          <></>
        )}
        {errors[props.name]?.type == 'pattern' ? (
          <>
            {errors[props.name]?.message === '' ? (
              <span>Rispettare le regole di formattazione</span>
            ) : (
              <span>{errors[props.name]?.message}</span>
            )}
          </>
        ) : (
          <></>
        )}
        {errors[props.name]?.type == 'validate' ? (
          <>
            {errors[props.name]?.message === '' ? (
              <span>Rispettare le regole di validazione</span>
            ) : (
              <span>{errors[props.name]?.message}</span>
            )}
          </>
        ) : (
          <></>
        )}
        {errors[props.name]?.type == 'equalTo' ? (
          <>
            {errors[props.name]?.message === '' ? (
              <span>I due campi devono essere uguali</span>
            ) : (
              <span>{errors[props.name]?.message}</span>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

// validationMessage
export default InputPassword;
