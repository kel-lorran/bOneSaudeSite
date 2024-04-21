import { createSlice } from '@reduxjs/toolkit';

const flowSlice = createSlice({
    name: 'flow',
    initialState: {},
    reducers: {
        setFlow: (state, action) => action.payload
    }
})

export const { setFlow } = flowSlice.actions;
export default flowSlice.reducer;
