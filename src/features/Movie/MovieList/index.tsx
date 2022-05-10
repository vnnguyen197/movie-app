import { useEffect } from 'react';
import './style.scss';
import { getListMoviesRequest } from 'store/Movie/MovieSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import CardMovie from './components/CardMovie';
import Loading from 'components/Loading';

function Index() {
    const [list, loading] = useAppSelector(({ movies: { list, loading } }) => [
        list,
        loading
    ]);

    const dispatch = useAppDispatch();
    let numPage = 2;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getListMoviesRequest({ page: 1 }));
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [dispatch]);

    const handleScroll = () => {
        const listItem = document.querySelector('#listItem') as HTMLElement;
        const footer = document.querySelector('#footer') as HTMLElement;
        if (
            window.scrollY + window.innerHeight >=
            listItem.clientHeight + listItem.offsetTop + footer.clientHeight -330
        ) {
            dispatch(
                getListMoviesRequest({
                    page: numPage++,
                })
            );
        }
    }

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