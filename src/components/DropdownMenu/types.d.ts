import { ReactNode, RefObject } from 'react';

export { FunctionComponent } from 'react';

export type Props = {
    children: ReactNode;
    className?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClose: VoidFunction;
    placement?: string;
    testId?: string;
    inputRef?: RefObject<HTMLInputElement | HTMLDivElement | HTMLButtonElement>;
};
