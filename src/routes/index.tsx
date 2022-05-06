import { BrowserRouter, Switch } from 'react-router-dom';
import { LayoutType } from '../layouts';
import DefaultRoute from './DefaultRoute';
import MovieList from '../features/Movie/MovieList';
import MovieDetail from 'features/Movie/MovieDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <DefaultRoute layout={LayoutType.BASIC} exact path="/">
          <MovieList />
        </DefaultRoute>

        <DefaultRoute layout={LayoutType.BASIC} exact path="/movie/:id">
           <MovieDetail /> 
        </DefaultRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;