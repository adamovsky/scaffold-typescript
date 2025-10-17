import Modal from 'components/Modal';
import Overlay from 'components/Overlay';

import { TEST_ID } from './constants';
import styles from './style.module.scss';
import type { FunctionComponent, Props } from './types';

const ModalOverlay: FunctionComponent<Props> = ({
    children,
    className = '',
    onClose,
    testId = TEST_ID
}) => (
    <Overlay className={`${className} ${styles.modalOverlay}`} testId={testId}>
        <Modal className={styles.modal} onClose={onClose}>
            {children}
        </Modal>
    </Overlay>
);

export default ModalOverlay;
