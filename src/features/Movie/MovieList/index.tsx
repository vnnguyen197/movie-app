import { useEffect } from 'react';
import './style.scss';
import { getListMoviesRequest } from 'store/Movie/MovieSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import CardMovie from './components/CardMovie';
import Loading from 'components/Loading';

function Index()  {
    const [list, loading] = useAppSelector(({ movies: { list, loading } }) => [
        list,
        loading
    ]);
    const dispatch = useAppDispatch();
    let numPage = 2;

    useEffect(() => {
        dispatch(getListMoviesRequest({ page: 1 }));
    }, [dispatch]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const footer = document.querySelector('#footer') as HTMLElement;
            const listItem = document.querySelector('#listItem') as HTMLElement;
            window.addEventListener('scroll', () => {
                if (
                    window.scrollY + window.innerHeight >=
                    listItem.clientHeight + listItem.offsetTop + footer.clientHeight - 330
                ) {
                    dispatch(
                        getListMoviesRequest({
                            page: numPage++,
                        }));
                }
            });
            return () => {
                window.removeEventListener('scroll', () => {
                    if (
                        window.scrollY + window.innerHeight >=
                        listItem.clientHeight + listItem.offsetTop + footer.clientHeight - 330
                    ) {
                        dispatch(
                            getListMoviesRequest({
                                page: numPage++,
                            }));
                    }
                })
            }
        }
    }, [dispatch, numPage]);

    return (
        <>
            <div id="listItem">
                {list && list.map((item: any, index) => {
                    return (
                        <div key={index}>
                            <CardMovie
                                {...item}
                                {...index}
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