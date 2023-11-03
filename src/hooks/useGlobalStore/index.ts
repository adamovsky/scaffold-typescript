import { useRef } from 'react';

import useReduxToolkit from 'hooks/useReduxToolkit';

import { UseGlobalStore } from './types';

const useGlobalStore: UseGlobalStore = ({ namespace }) => {
    const storeMap = useRef({
        reduxToolkit: useReduxToolkit
    }).current;

    return (storeMap.reduxToolkit)({ namespace });
};

export default useGlobalStore;
