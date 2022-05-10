import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailMovieRequest } from 'store/Movie/MovieSlice';
import { getPeopleMovieRequest } from 'store/People/PeopleSlice';
import MenuTop from './components/MenuTop';
import Content from './components/Content';
import Banner from './components/Banner';

const MovieDetail = (props: any) => {

  const dispatch = useDispatch();
  const { id } = useParams<any>();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetailMovieRequest({ id: id }));
    dispatch(getPeopleMovieRequest({ id: id }));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <div className="movie-detail">
        <MenuTop />
        <Banner {...props} />
        <Content />
      </div>
    </React.Fragment>
  );
}

export default MovieDetail;