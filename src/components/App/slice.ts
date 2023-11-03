import CONFIG from 'utilities/env';

import { createSlice } from '@reduxjs/toolkit';

export const app = createSlice({
    initialState: { config: CONFIG },

    name: 'app',

    reducers: {}
});

export default app.reducer;
