import {
    ChangeEvent,
    MutableRefObject,
    forwardRef,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';

import useTranslation from './hooks/useTranslation';

import { TEST_ID } from './constants';
import { Props } from './types';

import styles from './styles.module.scss';

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        autocomplete = 'on',
        className = '',
        hasError = false,
        id = '',
        isDisabled = false,
        isEditable = true,
        isReadOnly = false,
        isRequired = false,
        name = '',
        onBlur,
        onChange,
        onClick,
        onKeyUp,
        onSubmit,
        pattern = '',
        placeholder = '',
        testId = TEST_ID,
        type = 'text',
        value
    } = props;

    const { REQUIRED } = useTranslation();

    const errorMessage = useRef('');

    const [error, setError] = useState<string | undefined>();

    const onError = useCallback((message: string) => {
        setError(message);

        errorMessage.current = message;
    }, []);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;

            onChange?.(inputValue, onError);

            if (isRequired && !inputValue.length) {
                onError?.(REQUIRED);
            } else {
                setError(undefined);

                errorMessage.current = '';
            }
        },
        [isRequired, onChange, onError, REQUIRED]
    );

    useEffect(() => {
        if (value) {
            const currentReference = (ref as MutableRefObject<HTMLInputElement | null>)?.current;

            if (currentReference) {
                currentReference.value = value;
            }
        }
    }, [ref, value]);

    useEffect(() => {
        const currentReference = (ref as MutableRefObject<HTMLInputElement | null>)?.current;

        const handleSubmit: EventListener = (event: Event) => {
            event.preventDefault();

            const inputValue = currentReference?.value as string;

            handleChange({ target: { value: inputValue } } as ChangeEvent<HTMLInputElement>);

            onSubmit?.(inputValue, errorMessage.current);
        };

        currentReference?.addEventListener('submit', handleSubmit);

        return () => {
            currentReference?.removeEventListener('submit', handleSubmit);
        };
    }, [errorMessage, handleChange, onSubmit, ref]);

    const viewOnlyClass = !isEditable ? styles.viewOnly : '';
    const errorClassName = hasError || error ? styles.hasError : '';
    const placeholderText = isEditable ? placeholder : '';
    const hideClass = !isEditable && !value ? styles.hide : '';

    return (
        <input
            autoComplete={autocomplete}
            className={`${className} ${errorClassName} ${hideClass} ${viewOnlyClass} ${styles.input}`}
            data-testid={testId}
            defaultValue={value}
            disabled={!isEditable || isDisabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={handleChange}
            onClick={onClick}
            onKeyUp={onKeyUp}
            pattern={pattern}
            placeholder={placeholderText}
            readOnly={isReadOnly}
            ref={ref}
            type={type}
        />
    );
});

Input.displayName = 'Input';

export default Input;
