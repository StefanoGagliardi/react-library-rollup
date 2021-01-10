import React from 'react';
import { FieldBase } from '../types';
interface IProps {
    title: string;
    childTitle?: string;
}
export declare const FormTest: React.FC<IProps>;
export default FormTest;
interface IPropsChild {
    childTitle: string;
}
export declare const FormTestChild: React.FC<IPropsChild>;
export declare const TestInputText: React.FC<FieldBase>;
