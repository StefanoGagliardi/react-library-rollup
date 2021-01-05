// Core
import React, { ReactElement } from "react";

// Third packages

// Custom packages
import { FormConfiguration, FormGenerator } from "react-magic-form";

export const FormPageSubmit: React.FC = (): ReactElement => {
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
  title: "Fourth form generated - Submit handling",
  subTitle: "Gestione del submit con eventuali callback",
  submit: {
    endpoint: "http://localhost:5000/formSubmit",
    method: "POST",
    backend: true,
    onSubmit: (data: any) => {
      return data;
    },
  },
  buttonSubmit: {
    text: "Registrati",
    loading: true,
    dom: "button",
    block: false,
    layout: "1/3",
    class: "custom-submit-class",
    id: "submitID",
  },
  fields: [
    {
      type: "text",
      label: "Nome",
      layout: "1/3",
      id: "firstName",
      name: "firstName",
      placeholder: "Inserisci il tuo nome",
      validation: {
        required: true,
        message: "Devi inserire il tuo nome",
      },
      autocomplete: "off",
    },
    {
      type: "text",
      label: "Cognome",
      layout: "1/3",
      id: "lastName",
      name: "lastName",
      placeholder: "Inserisci il tuo cognome",
      validation: {
        required: true,
        message: "Devi inserire il tuo cognome",
      },
      autocomplete: "off",
    },
    {
      type: "password",
      label: "Password",
      layout: "1/3",
      id: "password",
      name: "password",
      placeholder: "Inserire una password",
      validation: {
        required: true,
      },
      autocomplete: "current-passowrd",
    },
  ],
};

export default FormPageSubmit;
