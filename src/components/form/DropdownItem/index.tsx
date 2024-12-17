import { TEST_ID } from './constants';
import { FunctionComponent, Props } from './types';

import styles from './styles.module.scss';

const DropdownItem: FunctionComponent<Props> = ({
    children,
    className = '',
    onClick,
    testId = TEST_ID,
    text = ''
}) => (
    <div className={`${className} ${styles.dropdownItem}`} data-testid={testId} onClick={onClick}>
        {children || text}
    </div>
);

export default DropdownItem;
