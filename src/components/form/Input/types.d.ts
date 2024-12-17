export interface HandleSubmit {
    (value: string, errorMessage: string): void;
}

export type Props = {
    autocomplete?: 'on' | 'off';
    className?: string;
    hasError?: boolean;
    id?: string;
    isDisabled?: boolean;
    isEditable?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    name?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (value: string, onError: (message: string) => void) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onSubmit?: HandleSubmit;
    pattern?: string;
    placeholder?: string;
    testId?: string;
    type?: string;
    value?: string;
};
