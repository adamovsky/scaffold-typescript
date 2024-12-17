import useTranslate from 'app/i18n/useTranslate';

const useTranslation = () => {
    const t = useTranslate('input');

    return {
        REQUIRED: t('required')
    };
};

export default useTranslation;
