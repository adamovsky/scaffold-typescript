export { FunctionComponent } from 'react';

export type DropdownItemType = {
    label: string;
    type: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
};

type OnError = (value: unknown, message: string, setError: (message: string) => void) => void;
type OnChange = (value: unknown, onError: OnError, index: number) => void;
type OnSubmit = (value: string | undefined, errorMessage?: string) => void;
type OnValid = (value: unknown) => void;

export type Props = {
    className?: string;
    hasError?: boolean;
    isEditable?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    items: DropdownItemType[];
    label?: string;
    onChange?: OnChange;
    onError?: OnError;
    onSubmit?: OnSubmit;
    onValid?: OnValid;
    placeholder?: string;
    selected?: number;
    testId?: string;
    value?: string;
};
