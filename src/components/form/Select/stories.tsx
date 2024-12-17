import { useRef } from 'react';

import Select from './index';
import { FunctionComponent, Props } from './types';

const story = {
    component: Select,
    title: 'Select'
};

export default story;

const Template: FunctionComponent<Props> = args => {
    const ref = useRef<HTMLSelectElement>(null);

    return <Select ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.defaultProps = {};
