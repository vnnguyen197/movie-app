import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import MovieAPI from "services/MovieAPI";
import {
  getPeopleMovieFail,
  getPeopleMovieRequest,
  getPeopleMovieSuccess
} from "./PeopleSlice";


function* getPeoplelMovie(action: PayloadAction<any>) {
  try {
    if (action.payload.id) {
      const peopleData: object = yield call(MovieAPI.getPeople, action.payload.id);
      yield put(getPeopleMovieSuccess(peopleData));
    }
  } catch (error) {
    yield put(getPeopleMovieFail(error));
  }
}

function* watchGetPeople() {
  yield takeLatest(getPeopleMovieRequest.type, getPeoplelMovie);
}

const saga = [watchGetPeople()];

export default saga;
