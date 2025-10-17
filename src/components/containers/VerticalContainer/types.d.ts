import type { ReactNode } from 'react';

export type { FunctionComponent } from 'react';

export type Props = {
    className?: string;
    children: ReactNode;
    onClick?: VoidFunction;
    testId?: string;
};
