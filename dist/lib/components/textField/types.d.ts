import { ReactNode, ChangeEvent, KeyboardEvent } from 'react';
export interface ITextField {
    name: string;
    id?: string;
    className?: string;
    placeholder?: string;
    value?: string | number | string[];
    disabled?: boolean;
    variant?: string;
    type?: InputTypes;
    label?: string;
    error?: string;
    helperLabel?: string;
    helperText?: string | ReactNode;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: any) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    maxlength?: number;
}
export declare enum InputTypes {
    Password = "password",
    Text = "text",
    Number = "number",
    FloatNumber = "floatNumber",
    Tel = "tel",
    Email = "email",
    Currency = "currency",
    Date = "date",
    Numerical = "numerical"
}
export declare enum AutoCompleteStatus {
    On = "on",
    Off = "off"
}
