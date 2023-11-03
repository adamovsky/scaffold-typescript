export type { FunctionComponent, MouseEvent } from 'react';

export type Props = {
    children: ReactNode,
    className?: string,
    isDisabled?: boolean,
    onClick: (event: MouseEvent<HTMLButtonElement>) => void,
    text: string,
    value?: string
};

export type Ref = HTMLButtonElement;