import { TEST_ID } from './constants';

import styles from './styles.module.scss';

import { FunctionComponent, Props } from './types';

const ContentContainer: FunctionComponent<Props> = ({ children, className = '', testId = TEST_ID }) => (
    <section
        className={`${className} ${styles.contentContainer}`}
        data-testid={testId}
    >
        {children}
    </section>
);

export default ContentContainer;
