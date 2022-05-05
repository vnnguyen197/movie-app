import { useDispatch } from 'react-redux';
import  { useEffect } from 'react';
import './style.scss';
import { getListMoviesRequest } from 'store/Movie/MovieSlice';
import { useAppSelector } from 'app/hooks';
import CardMovie from './components/CardMovie';
import Loading from 'components/Loading';

const Index = () => {
    const [list, loading] = useAppSelector(({ movies: { list, loading } }) => [
        list,
        loading
    ]); 

    let numPage = 2;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListMoviesRequest({ page: 1 }));
    }, [dispatch]);

    useEffect(() => {
        const footer = document.querySelector('#footer') as HTMLElement;
        const listItem = document.querySelector('#listItem') as HTMLElement;
        window.addEventListener('scroll', () => {
            if  (
                window.scrollY + window.innerHeight >=
                listItem.clientHeight + listItem.offsetTop + footer.clientHeight - 330
            ) {
                dispatch(
                    getListMoviesRequest({
                        page: numPage++,
                    }));
            }
        });
    }, [dispatch, numPage]);

    return (
        <>
            <div id="listItem">
                {list.map((item:any, index) => {
                    return (
                        <div key={index}>                     
                            <CardMovie
                                {...item}
                            /> 
                        </div>
                    )
                })}
            </div>
            {loading ? <Loading /> : ""}
        </>
    );
}

export default Index;