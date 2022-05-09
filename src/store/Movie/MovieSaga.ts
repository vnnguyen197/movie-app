import { PayloadAction } from "@reduxjs/toolkit";
import MovieAPI from "../../services/MovieAPI";
import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  getDetailMovieFail,
  getDetailMovieRequest,
  getDetailMovieSuccess,
  getListMoviesFail,
  getListMoviesRequest,
  getListMoviesSuccess
} from "./MovieSlice";

export function* getListMovies(action: PayloadAction<any>) {
  try {
    const { results } = yield call(MovieAPI.getList, action.payload);
    yield delay(500);
    yield put(getListMoviesSuccess(results));
  } catch (error) {
    yield put(getListMoviesFail(error));
  }
}

function* getDetailMovie(action: PayloadAction<any>) {
  try {
    if (action.payload.id) {
      const response: object = yield call(MovieAPI.getDetailMovie, action.payload.id);
      yield put(getDetailMovieSuccess(response));
    }
  } catch (error) {
    yield put(getDetailMovieFail(error));
  }
}

function* watchGetList() {
  yield takeLatest(getListMoviesRequest.type, getListMovies);
}

function* watchGetDetail() {
  yield takeLatest(getDetailMovieRequest.type, getDetailMovie);
}

const saga = [watchGetList(), watchGetDetail()];

export default saga;
