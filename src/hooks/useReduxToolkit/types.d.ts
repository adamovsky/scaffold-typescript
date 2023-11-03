import { AnyAction } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import store from "app/store";

export type RootState = ReturnType<typeof store.getState>;

type Params = {
    namespace: string
};

export interface GetValue {
    (type: string): any;
}

export interface SetValue {
    (value: AnyAction): void;
}

type Interface = {
    getValue: GetValue;
    setValue: SetValue,
    store: ToolkitStore
};

export interface UseReduxToolkit {
    (params: Params): Interface;
};

