import { FunctionComponent, Props } from './types';

import styles from './styles.module.scss';

const ContentPanel: FunctionComponent<Props> = ({ children, className = '' }) => (
    <div className={`${className} ${styles.contentPanel}`}>{children}</div>
);

ContentPanel.displayName = 'ContentPanel';

export default ContentPanel;
