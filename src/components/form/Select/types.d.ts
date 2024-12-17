import { SelectHTMLAttributes } from 'react';

export { FunctionComponent } from 'react';

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    items: { label: string; value: string }[];
}
