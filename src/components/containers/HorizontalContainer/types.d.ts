import type { MutableRefObject, ReactNode } from 'react';

export type { FunctionComponent } from 'react';

export type Props = {
    children?: ReactNode;
    className?: string;
    onClick?: (event: MouseEventHandler<HTMLDivElement>) => void;
    ref?: MutableRefObject<HTMLDivElement>;
    testId?: string;
};
