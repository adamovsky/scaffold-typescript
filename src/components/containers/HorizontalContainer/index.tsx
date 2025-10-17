import { forwardRef } from 'react';

import { TEST_ID } from './constants';
import type { Props } from './types';

import styles from './styles.module.scss';

const HorizontalContainer = forwardRef<HTMLDivElement, Props>(
    ({ children, className = '', onClick, testId = TEST_ID }, ref) => (
        <div
            className={`${className} ${styles.horizontalContainer}`}
            data-testid={testId}
            onClick={onClick}
            ref={ref}
        >
            {children}
        </div>
    )
);

HorizontalContainer.displayName = 'HorizontalContainer';

export default HorizontalContainer;
