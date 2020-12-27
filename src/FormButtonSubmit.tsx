// Core
import React, { ReactElement, useEffect, useState } from 'react';

// Third packages
// import { useForm, FormProvider, useFormContext } from "react-hook-form";

// Custom package
import { getLayoutColClass } from './Helpers';
import { ButtonSubmit } from './types';
const FormButonSubmit: React.FC<ButtonSubmit> = (
  props: ButtonSubmit,
): ReactElement => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
  }, [loading]);

  const rowClass = getLayoutColClass(props?.layout ? props.layout : '1/4');
  const btnText = props?.text ? props.text : 'Invia';
  const btnClasses = 'fg__button-submit ' + props?.class ? props.class : ' ';
  const btnId = props?.id ? props.id : '';

  return (
    <div className="row">
      <div className={rowClass}>
        <div
          className={
            'fg__button-submit-wrapper ' + (loading ? 'with-loader ' : ' ')
          }
        >
          {!props?.dom ? (
            <input
              type="submit"
              id={btnId}
              className={btnClasses}
              value={btnText}
            />
          ) : (
            <></>
          )}
          {props?.dom && props.dom == 'input' ? (
            <input
              type="submit"
              id={btnId}
              className={btnClasses}
              value={btnText}
            />
          ) : (
            <></>
          )}
          {props?.dom && props.dom == 'button' ? (
            <button type="submit" id={btnId} className={btnClasses}>
              {btnText}
            </button>
          ) : (
            <></>
          )}
          {props?.loading == false ? (
            <></>
          ) : (
            <div className={'loader ' + (loading ? 'loader-active ' : ' ')}>
              <span></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormButonSubmit;
