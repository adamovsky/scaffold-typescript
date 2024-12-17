import { Props as InputProps } from 'components/form/Input/types';

export type Props = Omit<InputProps, 'autocomplete | id | isReadOnly | onBlur | onClick | type'> & {
    onError?: (message: string | undefined) => void;
    onValid?: (value: string) => void;
};
