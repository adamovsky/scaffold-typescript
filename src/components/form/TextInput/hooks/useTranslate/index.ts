import useTranslate from 'app/i18n/useTranslate';

const useTranslation = () => {
    const t = useTranslate('textInput');

    return {
        MAX_ERROR: (max: number) => t('maxError', { max }),
        MIN_ERROR: (min: number) => t('minError', { min }),
        PATTERN_MISMATCH: t('patternMismatch')
    };
};

export default useTranslation;
