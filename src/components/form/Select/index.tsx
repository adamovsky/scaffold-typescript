import { forwardRef } from 'react';

import { Props } from './types';

import styles from './styles.module.scss';

// eslint-disable-next-line react/display-name
const Select = forwardRef<HTMLSelectElement, Props>(
    ({ disabled, items = [], onBlur, onChange, onClick, value, ...rest }, ref) => (
        <select
            className={`${styles.select}`}
            defaultValue={value}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onClick}
            ref={ref}
            value={value}
            {...rest}
            disabled={disabled}
        >
            {items.map(({ label, value }, index) => (
                <option hidden key={`${value}.${index}`} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
);

export default Select;
