import { useRef } from 'react';

import { Provider } from 'react-redux';

import store from 'app/store';

import { FunctionComponent, Props, StoreMap } from './types';

const GlobalStore: FunctionComponent<Props> = ({ children }) => {
    const storeMap = useRef<StoreMap>({
        reduxToolkit: (props: Props) => <Provider store={store}>{props.children}</Provider>
    }).current;

    const StoreProvider = storeMap.reduxToolkit;

    return <StoreProvider>{children}</StoreProvider>;
};

export default GlobalStore;
