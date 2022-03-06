/// <reference types="react" />
import { ITextField } from './types';
import './input.scss';
declare function TextField({ className, id, name, label, value, onChange, placeholder, disabled, type, error }: ITextField): JSX.Element;
export default TextField;
