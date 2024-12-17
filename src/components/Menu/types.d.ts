import { ReactNode } from 'react';

export { FunctionComponent } from 'react';

export type MenuItemType = {
    text: string;
};

export type Props = {
    children?: ReactNode;
    className: string;
    items: MenuItemType[];
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    testId?: string;
};
