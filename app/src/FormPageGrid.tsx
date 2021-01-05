// Core1
import { FormConfiguration, FormGenerator } from "react-magic-form";
import React, { ReactElement } from "react";

// Third packages

export const FormPageGrid: React.FC = (): ReactElement => {
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
  title: "First form generated- Grid sytem",
  subTitle: "Sitema di griglia dinamico, sono supportate le seugneti colonne: '1' | '1/2' | '1/3' ",
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
      type: "text",
      label: "Input text label",
      layout: "1",
      id: "id1",
      name: "name1",
      validation: {},
    },
    {
      type: "password",
      label: "Input password label",
      layout: "1/2",
      id: "id3",
      name: "name3",
      validation: {},
    },
    {
      type: "password",
      label: "Input password label",
      layout: "1/2",
      id: "id3",
      name: "name3",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/3",
      id: "id4",
      name: "name4",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/3",
      id: "id5",
      name: "name5",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/3",
      id: "id6",
      name: "name6",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/4",
      id: "id8",
      name: "name8",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/4",
      id: "id9",
      name: "name9",
      validation: {},
    },
    {
      type: "text",
      label: "Input text label",
      layout: "1/4",
      id: "id10",
      name: "name10",
      validation: {},
    },
    {
      type: "password",
      label: "Input password label",
      layout: "1/4",
      id: "id11",
      name: "name11",
      validation: {},
    },
    // Custom input type
    {
      type: "password",
      label: "Input type custom 'password'",
      layout: "1",
      id: "id12",
      name: "name12",

      validation: {},
    },
  ],
};

export default FormPageGrid;
