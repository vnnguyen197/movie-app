import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultState, DEFAULT_STATE } from "constants/movie";

// interface MovieDetail {
//     id: number;
//     poster_path: string;
//     backdrop_path: string;
//     original_title: string;
//     release_date: string;
//     genres: Array<object>;
//     runtime: number;
//     vote_average: number;
//     tagline: string;
//     overview: string;
//     status: string;
//     original_language: string;
//     budget: number;
//     revenue: number;
//     title: string;
//     belongs_to_collection: { backdrop_path: string, name: string }
// };

// interface Movies {
//     title: string;
// };

// interface State extends defaultState {
//     list: Movies[],
//     detail: MovieDetail,
// };
// export const initMovieDetail: MovieDetail = {
//     id: 0,
//     poster_path: '',
//     backdrop_path: '',
//     original_title: '',
//     release_date: '',
//     genres: [],
//     runtime: 0,
//     vote_average: 0,
//     tagline: '',
//     overview: '',
//     status: '',
//     original_language: '',
//     budget: 0,
//     revenue: 0,
//     title: '',
//     belongs_to_collection: { backdrop_path: '', name: '' }
// }
// //setup default state in constant
// const initialState: State = {
//     ...DEFAULT_STATE,
//     list: [],
//     detail: initMovieDetail,
// };

// export const movieSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {
//         getListMoviesRequest: (state: State, action: PayloadAction<any>) => {
//             state.loading = !state.loading;
//         },

//         getListMoviesSuccess: (state: State, action: PayloadAction<any>) => {
//             // state.loading = false;
//             // state.list.push(action.payload);
//             // state.status = true;
//             state.loading = false;
//             state.list = state.list.concat(action.payload);
//             state.status = true;
//         },

//         getListMoviesFail: (state: State, action: PayloadAction<any>) => {
//             state.error = action.payload;
//             state.status = false;
//         },

//         getDetailMovieRequest: (state: State, action: PayloadAction<any>) => {
//             state.loading = true;
//         },

//         getDetailMovieSuccess: (state: State, action: PayloadAction<any>) => {
//             state.loading = false;
//             state.status = true;
//             state.detail = action.payload;
//         },

//         getDetailMovieFail: (state: State, action: PayloadAction<any>) => {
//             state.error = action.payload;
//             state.status = false;
//             state.loading = false;
//         },
//     },
// });

// export const {
//     getListMoviesRequest,
//     getListMoviesSuccess,
//     getListMoviesFail,
//     getDetailMovieRequest,
//     getDetailMovieSuccess,
//     getDetailMovieFail,
// } = movieSlice.actions;

// export default movieSlice.reducer;

interface MovieDetail {
    id: number;
    poster_path: string;
    backdrop_path: string;
    original_title: string;
    release_date: string;
    genres: Array<object>;
    runtime: number;
    vote_average: number;
    tagline: string;
    overview: string;
    status: string;
    original_language: string;
    budget: number;
    revenue: number;
    title: string;
    belongs_to_collection: { backdrop_path: string, name: string }
};
export const initMovieDetail: MovieDetail = {
    id: 0,
    poster_path: '',
    backdrop_path: '',
    original_title: '',
    release_date: '',
    genres: [],
    runtime: 0,
    vote_average: 0,
    tagline: '',
    overview: '',
    status: '',
    original_language: '',
    budget: 0,
    revenue: 0,
    title: '',
    belongs_to_collection: { backdrop_path: '', name: '' }
}
interface Movies {
    title: string;
};
interface State extends defaultState {
    list: Movies[],
    detail: MovieDetail,
};
//setup default state in constant
const initialState: State = {
    ...DEFAULT_STATE,
    list: [],
    detail: initMovieDetail,
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getListMoviesRequest: (state: State, action: PayloadAction<any>) => {
            state.loading = true;
        },
        getListMoviesSuccess: (state: State, action: PayloadAction<any>) => {
            // state.loading = false;
            // let list = state.list ;
            // list = state.list.push(action.payload);
            // state.status=true;
            // console.log(listItem);
            
            state.loading = false;
            state.list = state.list.concat(action.payload);
            state.status = true;
        },
        getListMoviesFail: (state: State, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.status = false;
        },
        getDetailMovieRequest: (state: State, action: PayloadAction<any>) => {
            state.loading = true;
        },
        getDetailMovieSuccess: (state: State, action: PayloadAction<any>) => {
            state.loading = false;
            state.status = true;
            state.detail = action.payload;
        },
        getDetailMovieFail: (state: State, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.status = false;
            state.loading = false;
        },
    },
});
//actions
export const {
    getListMoviesRequest,
    getListMoviesSuccess,
    getListMoviesFail,
    getDetailMovieRequest,
    getDetailMovieSuccess,
    getDetailMovieFail,
} = movieSlice.actions;

export default movieSlice.reducer;