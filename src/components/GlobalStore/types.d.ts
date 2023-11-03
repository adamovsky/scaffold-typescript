import { ReactNode } from 'react';

export type { FunctionComponent } from 'react';

export type Props = {
    children: ReactNode
};

export type StoreMap = { [key: string]: (props: Props) => JSX.Element };