import { createPortal } from 'react-dom';

import VerticalContainer from 'components/containers/VerticalContainer';

import { TEST_ID } from './constants';
import type { FunctionComponent, Props } from './types';

import styles from './styles.module.scss';

const Overlay: FunctionComponent<Props> = ({
    children,
    className = '',
    onClose,
    testId = TEST_ID
}) =>
    createPortal(
        <VerticalContainer
            className={`${className} ${styles.overlay}`}
            onClick={onClose}
            testId={testId}
        >
            {children}
        </VerticalContainer>,
        document.body
    );

export default Overlay;
