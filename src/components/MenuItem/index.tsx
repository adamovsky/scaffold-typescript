import { TEST_ID } from './constants';
import { FunctionComponent, Props } from './types';

import styles from './styles.module.scss';

const MenuItem: FunctionComponent<Props> = ({ className = '', testId = TEST_ID, text = '' }) => (
    <div className={`${className} ${styles.menuItem}`} data-testid={testId}>
        {text}
    </div>
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
