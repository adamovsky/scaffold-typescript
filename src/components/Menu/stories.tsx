import { FunctionComponent, Props } from './types';

import Menu from '.';

const story = {
    component: Menu,
    title: 'Menu'
};

// eslint-disable-next-line react-refresh/only-export-components
export default story;

const Template: FunctionComponent<Props> = args => <Menu {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {};
