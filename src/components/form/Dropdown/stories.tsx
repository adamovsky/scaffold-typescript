import Dropdown from './index';
import { FunctionComponent, Props } from './types';

const story = {
    component: Dropdown,
    title: 'Dropdown'
};

export default story;

const Template: FunctionComponent<Props> = args => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.defaultProps = {
    onChange: newValue => console.log('Input changed to: ', newValue),
    placeholder: 'Placeholder text'
};
