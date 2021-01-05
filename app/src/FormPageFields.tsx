// Core
import React, { ReactElement } from "react";

// Third packages

// Custom packages
import { FormConfiguration, FormGenerator } from "react-magic-form";

export const FormPageFields: React.FC = (): ReactElement => {
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
  title: "Third form generated - Input types",
  subTitle: "Diverse tipologie di input supportate: text, email, password, select, textare, address, datepicker ...",
  submit: {
    endpoint: "http://localhost:5000/formSubmit",
    method: "POST",
    backend: true,
    onSubmit: (data: any) => {
      console.log("Custom submit callback in useCallback", data);
      return data;
    },
  },
  fields: [
    {
      type: "text",
      label: "Input type TEXT",
      layout: "1/3",
      id: "inputTest",
      name: "inputTest",
      placeholder: "Inserire un testo",
      validation: {
        required: true,
      },
      autocomplete: "off",
    },
    {
      type: "email",
      label: "Input type EMAIL",
      layout: "1/3",
      id: "inputEmail",
      name: "inputEmail",
      placeholder: "Inserire un'email",
      validation: {
        required: true,
      },
      autocomplete: "email",
    },
    {
      type: "password",
      label: "Input type PASSWORD",
      layout: "1/3",
      id: "inputPassword",
      name: "inputPassword",
      placeholder: "Inserire una password",
      validation: {
        required: true,
      },
      autocomplete: "current-passowrd",
    },
    {
      type: "select",
      label: "Input type SELECT with STATIC data",
      layout: "1/3",
      id: "inputSelect",
      name: "inputSelect",
      // placeholder: "Selezionare una città",
      validation: {
        required: {
          value: true,
          message: "Selezionare una città",
        },
      },
      dataLoading: false,
      data: [
        {
          label: "--- SELEZIONARE UN OPZIONE ---",
          value: "",
        },
        {
          label: "Milano static",
          value: "MI",
        },
        {
          label: "Monza static",
          value: "MB",
        },
        {
          label: "Cremona static",
          value: "CR",
        },
        {
          label: "Lodi static",
          value: "LO",
        },
        {
          label: "Codogno static",
          value: "CD",
        },
        {
          label: "Como static",
          value: "CO",
          selected: true,
        },
      ],
    },
    {
      type: "select",
      label: "Input type SELECT with DYNAMIC data",
      layout: "1/3",
      id: "inputSelectUrl",
      name: "inputSelectUrl",
      placeholder: "Selezionare una città",
      validation: {
        required: {
          value: true,
          message: "Selezionare una città",
        },
      },
      dataLoading: true,
      fetchDataFromUrl: "https://run.mocky.io/v3/433d52dc-1854-43e3-a44d-7af43afe45e9",
      data: [],
    },
    {
      type: "select",
      label: "Input type SELECT with NO data",
      layout: "1/3",
      id: "inputSelectLoader",
      name: "inputSelectLoader",
      placeholder: "Selezionare una città",
      validation: {
        required: {
          value: false,
          message: "Selezionares una città",
        },
      },
      dataLoading: true,
      fetchDataFromUrl: "",
      data: [],
    },
    {
      type: "textarea",
      label: "Input type TEXTAREA",
      layout: "1/2",
      id: "textarea",
      name: "textarea",
      placeholder: "Inserire un messaggio",
      validation: {
        required: {
          value: true,
          message: "Fornire un messaggio",
        },
      },
    },
    {
      type: "checkbox",
      label: "Input type CHECKBOX",
      layout: "1/2",
      id: "checkbox",
      name: "checkbox",
      placeholder: 'Devi accettare la <a href="https://www.google.it" target="_blank">Privacy Policy</a>',
      validation: {
        required: {
          value: true,
          message: "Devi accettare la Privacy Policy",
        },
      },
    },
  ],
};

export default FormPageFields;
