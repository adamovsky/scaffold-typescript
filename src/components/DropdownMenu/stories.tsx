import { FunctionComponent, Props } from './types';

import DropdownMenu from '.';

const story = {
    component: DropdownMenu,
    title: 'DropdownMenu'
};

// eslint-disable-next-line react-refresh/only-export-components
export default story;

const Template: FunctionComponent<Props> = args => <DropdownMenu {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {};
