import { defaultState, DEFAULT_STATE } from "constants/movie";

interface MovieDetail {
    id: number,
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
interface Movies {
    title: string;
};
interface State extends defaultState {
    list: Movies[],
    detail: MovieDetail,
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

// setup default state in constant
const initialState: State = {
    ...DEFAULT_STATE,
    list: [],
    detail: initMovieDetail,
};