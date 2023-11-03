import type { UseReduxToolkit } from 'hooks/useReduxToolkit/types';

type Params = {
    namespace: string
};

export interface UseGlobalStore extends UseReduxToolkit { };

