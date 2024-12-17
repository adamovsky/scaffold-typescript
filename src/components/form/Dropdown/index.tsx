import React, {
    MutableRefObject,
    forwardRef,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';

import isFunction from '@@utils/isFunction';
import { DropdownMenu } from '@rantizo-software/rantizo-ui';

import InputWithLabel from 'components/InputWithLabel';
import DropdownItem from 'components/form/DropdownItem';
import Input from 'components/form/Input';
import Select from 'components/form/Select';

import useTranslation from './hooks/useTranslation';

import { TEST_ID } from './constants';
import { Props } from './types';

import styles from './styles.module.scss';

const Dropdown = forwardRef<HTMLSelectElement, Props>((props, ref) => {
    const {
        className = '',
        hasError = false,
        isDisabled = false,
        isEditable = true,
        isRequired = false,
        items = [],
        label = '',
        onChange,
        onError,
        onSubmit,
        onValid,
        placeholder,
        selected,
        testId = TEST_ID,
        value
    } = props;

    const { REQUIRED } = useTranslation();
    const [selectedLabel, setSelectedLabel] = useState<string>();
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(selected);
    const [error, setError] = useState<string>();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleError = useCallback(
        (dropdownValue: unknown, message: string) => {
            if (isFunction(onError)) {
                onError?.(dropdownValue, message, setError);
            } else {
                setError(message);
            }
        },
        [onError]
    );

    const handleRequired = useCallback(
        (item: unknown) => {
            if (isRequired && !item) {
                handleError?.(item, REQUIRED);
            } else {
                setError('');
            }
        },
        [handleError, isRequired, setError, REQUIRED]
    );

    const handleChange = useCallback(
        (dropdownValue: string, index: number) => {
            handleRequired(dropdownValue?.length);
            onChange?.(dropdownValue, handleError, index);
        },
        [handleError, handleRequired, onChange]
    );

    const handleClick = useCallback(() => isOpen, [isOpen]);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const handleOpen = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const handleBlur = useCallback(
        (event: React.FocusEvent<unknown>) => {
            if (
                !event.relatedTarget?.classList.contains(styles.dropdownMenu) &&
                event.relatedTarget?.closest(`[class~=${styles.dropdownMenu}]`) == null
            ) {
                handleClose();
            }
        },
        [handleClose]
    );

    const setInputValue = useCallback(
        (value: string) => {
            if (inputRef.current) {
                inputRef.current.value = value;
            }
        },
        [inputRef]
    );

    const handleDropdownItemClick = useCallback(
        (index: number) => () => {
            const selectedItem = items[index];

            setSelectedIndex(index);
            setSelectedLabel(selectedItem?.label);
            handleClose();
            if (index !== selectedIndex) {
                onValid?.(selectedItem.value);
                handleChange(selectedItem.value, index);
                setInputValue(selectedItem?.label);
            }
        },
        [handleChange, items, handleClose, onValid, selectedIndex, setInputValue]
    );

    useEffect(
        () => {
            if (selected !== undefined && selected !== null) {
                setSelectedIndex(selected);
                handleChange(items[selected]?.value, selected);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selected]
    );

    useEffect(() => {
        const index = items.findIndex(item => item.value === value);

        if (index > -1) {
            setSelectedLabel(items[index].label);
            setSelectedIndex(index);
            setInputValue(items[index].label);
        }
    }, [items, setInputValue, value]);

    useEffect(() => {
        const currentReference = (ref as MutableRefObject<HTMLSelectElement>).current;

        const handleSubmit = () => {
            if (items.length > 0) {
                const inputValue = selectedIndex !== undefined ? items[selectedIndex].value : '';

                handleRequired(inputValue);

                onSubmit?.(inputValue, error);
            }
        };

        currentReference?.addEventListener('submit', handleSubmit);

        return () => {
            currentReference?.removeEventListener('submit', handleSubmit);
        };
    }, [error, handleChange, handleRequired, items, onSubmit, ref, selectedIndex]);

    const errorClassName = hasError || error ? styles.hasError : '';
    const viewOnlyClassName = !isEditable ? styles.viewOnlyDropDown : '';

    return (
        <InputWithLabel
            className={`${className} ${styles.dropdown} ${viewOnlyClassName}`}
            hasError={hasError}
            isDisabled={isDisabled}
            isEditable={isEditable}
            onClick={handleClick}
            testId={testId}
            text={label}
        >
            <Select
                disabled={isDisabled}
                items={items}
                onBlur={handleBlur}
                onClick={handleOpen}
                ref={ref}
                value={selectedLabel}
            />

            <Input
                value={
                    selectedLabel ||
                    (typeof selectedIndex !== 'undefined' ? items[selectedIndex]?.label : '')
                }
                className={`${errorClassName} ${styles.input}`}
                isDisabled={isDisabled}
                isEditable={isEditable}
                isReadOnly={true}
                onBlur={handleBlur}
                onClick={handleOpen}
                placeholder={placeholder}
                ref={inputRef}
            />

            {isOpen && (
                <DropdownMenu
                    className={styles.dropdownMenu}
                    inputRef={inputRef}
                    onClose={handleClose}
                >
                    {items.map(({ label, type, value }, index) => (
                        <DropdownItem
                            isSelected={selectedIndex === index}
                            key={`${label}${index}`}
                            onClick={handleDropdownItemClick(index)}
                            text={label}
                            type={type}
                            value={value}
                        />
                    ))}
                </DropdownMenu>
            )}
        </InputWithLabel>
    );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
