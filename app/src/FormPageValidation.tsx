// Core
import React, { ReactElement } from "react";

// Third packages

// Custom packages
import { FormConfiguration, FormGenerator } from "react-magic-form";

export const FormPageValidation: React.FC = (): ReactElement => {
  return (
    <main>
      <section className="section bg-light alternate">
        <div className="container">
          <FormGenerator form={formConfig} />
        </div>
      </section>
    </main>
  );
};

// NB: FormConfiguration is a type of FormGenerator
const formConfig: FormConfiguration = {
  title: "Second form generated - input validaion",
  subTitle: "Vari tipologie di validazine per gli input: required, minLenght, maxLenght, equalTo, callback...",
  submit: {
    endpoint: "http://localhost:5000/formSubmit",
    method: "POST",
    backend: true,
    onSubmit: (data: any) => {
      console.log("Custom submit callback in useCallback", data);
    },
  },
  fields: [
    {
      type: "email",
      label: "Indirizzo email",
      layout: "1/2",
      id: "email",
      name: "email",
      placeholder: "Inserire l'indirizzo email",
      validation: {
        required: true,
      },
    },
    {
      type: "text",
      label: "Ripetere indirizzo email",
      layout: "1/2",
      id: "repeatEmail",
      name: "repeatEmail",
      placeholder: "Ripetere l'indirizzo email",
      validation: {
        required: {
          value: true,
          message: "Ripetere l'indirizzo email",
        },
        equalTo: {
          value: "email",
          message: "I due indirizzi email devono coincdere  ",
        },
      },
    },
    {
      type: "text",
      label: "Nome",
      layout: "1/3",
      id: "firstName",
      name: "firstName",
      placeholder: "Inserire il nome",
      validation: {
        required: {
          value: true,
          message: "Messaggio personalizzato",
        },
        validate: (value: string) => value === "Stefano",
        minLength: 2,
        maxLength: 15,
      },
    },
    {
      type: "text",
      label: "Cognome",
      layout: "1/3",
      id: "lastName",
      name: "lastName",
      placeholder: "Inserire il cognome",
      validation: {
        required: true,
        minLength: 2,
        maxLength: 15,
      },
    },
    {
      type: "text",
      label: "Telefono",
      layout: "1/3",
      id: "phone",
      name: "phone",
      placeholder: "Inserire il telefono",
      validation: {
        required: true,
        pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      },
    },
    {
      type: "password",
      label: "Password",
      layout: "1/2",
      id: "password",
      name: "password",
      placeholder: "Inserire la password",
      validation: {
        required: true,
        minLength: 3,
      },
    },
    {
      type: "text", // Replace with type number
      label: "Età",
      layout: "1/2",
      id: "age",
      name: "age",
      placeholder: "Inserire la tua età",
      validation: {
        required: true,
        min: 18,
        max: 60,
      },
    },
  ],
};

export default FormPageValidation;
