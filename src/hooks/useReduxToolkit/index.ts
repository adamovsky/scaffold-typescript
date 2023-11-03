import { useDispatch, useSelector } from 'react-redux';

import store from 'app/store';

import { GetValue, RootState, SetValue, UseReduxToolkit } from './types';

const useReduxToolkit: UseReduxToolkit = ({ namespace }) => {
    const dispatch = useDispatch();

    const namespacedStore = useSelector((store: RootState) => (store as any)[namespace]);

    const getValue: GetValue = type => namespacedStore[type];

    const setValue: SetValue = value => { dispatch(value) };

    return {
        getValue,
        setValue,
        store
    };
};

export default useReduxToolkit;
