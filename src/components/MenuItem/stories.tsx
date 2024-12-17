import { FunctionComponent, Props } from './types';

import MenuItem from '.';

const story = {
    component: MenuItem,
    title: 'MenuItem'
};

// eslint-disable-next-line react-refresh/only-export-components
export default story;

const Template: FunctionComponent<Props> = args => <MenuItem {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {};
