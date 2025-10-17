import CloseButton from 'components/buttons/CloseButton';
import VerticalContainer from 'components/containers/VerticalContainer';

import { TEST_ID } from './constants';
import type { FunctionComponent, Props } from './types';

import styles from './styles.module.scss';

const Modal: FunctionComponent<Props> = ({
    children,
    className = '',
    onClose,
    testId = TEST_ID
}) => (
    <div className={`${className} ${styles.modal}`} data-testid={testId}>
        <CloseButton className={styles.closeButton} onClick={onClose} />

        <VerticalContainer>{children}</VerticalContainer>
    </div>
);

export default Modal;
