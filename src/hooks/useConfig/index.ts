import useGlobalStore from '../useGlobalStore';

import { Config } from './types';

const useConfig = (): Config => {
    const { getValue } = useGlobalStore({ namespace: 'app' });

    return getValue('config');
};

export default useConfig;
