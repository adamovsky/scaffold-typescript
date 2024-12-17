import { forwardRef } from 'react';

import ContentPanel from 'components/ContentPanel';
import Menu from 'components/Menu';

import { TEST_ID } from './constants';
import { Props } from './types';

import styles from './styles.module.scss';

const DropdownMenu = forwardRef<HTMLInputElement | HTMLDivElement, Props>(
    ({ children, className = '', onBlur, testId = TEST_ID }, ref) => (
        <Menu
            className={`${className} ${styles.dropdownMenu}`}
            items={[]}
            onBlur={onBlur}
            ref={ref}
            testId={testId}
        >
            <ContentPanel className={styles.contentPanel}>{children}</ContentPanel>
        </Menu>
    )
);

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
