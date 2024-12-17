import { forwardRef } from 'react';

import Input from 'components/form/Input';

import { TEST_ID } from './constants';
import { Props } from './types';

import styles from './styles.module.scss';

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        className = '',
        hasError = false,
        isDisabled = false,
        isEditable = true,
        isReadOnly = false,
        isRequired = false,
        name = '',
        onChange,
        onClick,
        onKeyUp,
        onSubmit,
        pattern = '',
        placeholder = '',
        testId = TEST_ID,
        value
    } = props;

    const viewOnlyClass = !isEditable ? styles.viewOnly : '';

    return (
        <Input
            className={`${className} ${viewOnlyClass} ${styles.textInput}`}
            hasError={hasError}
            isDisabled={isDisabled}
            isEditable={isEditable}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
            name={name}
            onChange={onChange}
            onClick={onClick}
            onKeyUp={onKeyUp}
            onSubmit={onSubmit}
            pattern={pattern}
            placeholder={placeholder}
            ref={ref}
            testId={testId}
            type="text"
            value={value}
        />
    );
});

TextInput.displayName = 'TextInput';

export default TextInput;
