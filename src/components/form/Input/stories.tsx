import { FunctionComponent, useEffect, useRef } from 'react';

import Input from 'components/form/Input';

import { Props } from './types';

const story = {
    component: Input,
    title: 'Input'
};

export default story;

const Template: FunctionComponent<Props> = args => {
    const ref = useRef<HTMLInputElement>(null);

    return <Input ref={ref} {...args} />;
};

export const Primary = Template.bind({});

Primary.defaultProps = {
    hasError: false,
    isRequired: true,
    onChange: (newValue: string) => console.log('Input changed to: ', newValue),
    placeholder: 'Placeholder text'
};

const SubmitTemplate: FunctionComponent<Props> = args => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.dispatchEvent(new Event('submit'));
    }, []);

    return <Input ref={ref} {...args} />;
};

export const Submit = SubmitTemplate.bind({});

Submit.defaultProps = {
    hasError: false,
    isRequired: true,
    onChange: (newValue: string) => console.log('Input changed to: ', newValue),
    onSubmit: (inputValue: string | undefined, error: string) =>
        console.log('Submit with : ', { error, inputValue }),
    placeholder: 'Placeholder text'
};
