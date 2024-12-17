import DropdownItem from './index';
import { FunctionComponent, Props } from './types';

const story = {
    component: DropdownItem,
    title: 'DropdownItem'
};

export default story;

const Template: FunctionComponent<Props> = args => <DropdownItem {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {
    text: 'Dropdown item'
};
