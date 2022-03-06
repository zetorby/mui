/// <reference types="react" />
import { ButtonVariantsEnum, IButtonProps } from './types';
import './button.scss';
declare function Button({ children, variant, fullWidth, className, ...props }: IButtonProps): JSX.Element;
declare namespace Button {
    var defaultProps: {
        variant: ButtonVariantsEnum;
    };
}
export default Button;
