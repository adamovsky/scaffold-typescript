import { forwardRef } from 'react';

import MenuItem from 'components/MenuItem';

import { TEST_ID } from './constants';
import { Props } from './types';

import styles from './styles.module.scss';

const Menu = forwardRef<HTMLDivElement, Props>(
    ({ children, className = '', items, onBlur, testId = TEST_ID }, ref) => (
        <div
            className={`${className} ${styles.menu}`}
            data-testid={testId}
            onBlur={onBlur}
            ref={ref}
            tabIndex={0}
        >
            {items?.map(({ text }) => <MenuItem key={text} text={text} />)}

            {children}
        </div>
    )
);

Menu.displayName = 'Menu';

export default Menu;
