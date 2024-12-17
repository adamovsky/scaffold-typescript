import { FunctionComponent, Props } from './types';

import ContentPanel from '.';

const story = {
    component: ContentPanel,
    title: 'ContentPanel'
};

// eslint-disable-next-line react-refresh/only-export-components
export default story;

const Template: FunctionComponent<Props> = args => (
    <ContentPanel {...args}>Some Content</ContentPanel>
);

export const Primary = Template.bind({});

Primary.defaultProps = {};
