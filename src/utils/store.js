export const DEFAULT_REQUEST = (state) => {
    state.loading = !state.loading;
};

export const DEFAULT_SUCCESS = (state, action) => {
    state.list = action.payload;
    state.status = true;
    state.loading = false;
};

export const DEFAULT_FAILURE = (state, action) => {
    state.status = false;
    state.loading = false;
    state.error = action.payload;
};