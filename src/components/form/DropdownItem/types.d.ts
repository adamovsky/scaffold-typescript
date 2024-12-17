import { ReactNode } from 'react';

export { FunctionComponent } from 'react';

export type Props = {
    children?: ReactNode;
    className?: string;
    onClick: VoidFunction;
    testId?: string;
    text?: string;
    isSelected?: boolean;
    type?: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
};
