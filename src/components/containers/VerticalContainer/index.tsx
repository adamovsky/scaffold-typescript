import { forwardRef } from 'react';

import { TEST_ID } from './constants';
import type { Props } from './types';

import styles from './styles.module.scss';

const VerticalContainer = forwardRef<HTMLDivElement, Props>(
    ({ children, className = '', onClick, testId = TEST_ID }, ref) => (
        <div
            className={`${className} ${styles.verticalContainer}`}
            data-testid={testId}
            onClick={onClick}
            ref={ref}
        >
            {children}
        </div>
    )
);

VerticalContainer.displayName = 'VerticalContainer';

export default VerticalContainer;
