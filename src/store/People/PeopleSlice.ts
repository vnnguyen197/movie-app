import { defaultState, DEFAULT_STATE } from 'constants/movie';
import { DEFAULT_SUCCESS, DEFAULT_FAILURE } from 'utils/store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface People{
    id: number,
    list: Array<string>,
    crew: Array<string>,
}
interface State extends defaultState{
  list: People,
  crew: People,
}

export const initPeople: People = {
    id: 0,
    list: [],
    crew: [],
}

const initialState: State = {
  ...DEFAULT_STATE,
  list: initPeople,
  crew: initPeople,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    getPeopleMovieRequest: (state: State, action: PayloadAction<any>) => {
      state.loading = !state.loading;
    },

    getPeopleMovieSuccess: (state: State, action: PayloadAction<any>) => {
      DEFAULT_SUCCESS(state, action);
    },

    getPeopleMovieFail: (state: State, action: PayloadAction<any>) => {
      DEFAULT_FAILURE(state, action);
  },

},
})

//actions
export const {
  getPeopleMovieRequest,
  getPeopleMovieSuccess,
  getPeopleMovieFail,
} = peopleSlice.actions;

export default peopleSlice.reducer;
