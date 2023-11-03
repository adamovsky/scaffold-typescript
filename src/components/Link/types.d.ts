export type { FunctionComponent, MouseEvent } from 'react';

export type Props = {
    children: ReactNode,
    className?: string,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
    target?: string,
    to: string
};

export type Ref = HTMLButtonElement;
