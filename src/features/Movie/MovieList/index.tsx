import { useEffect } from 'react';
import './style.scss';
import { getListMoviesRequest } from 'store/Movie/MovieSlice';
import { useAppSelector } from 'app/hooks';
import CardMovie from './components/CardMovie';
import Loading from 'components/Loading';
import { useDispatch } from 'react-redux';

const Index = () => {
    const [list, loading] = useAppSelector(({ movies: { list, loading } }) => [
        list,
        loading
    ]);

    const dispatch = useDispatch();
    let numPage = 2;

    useEffect(() => {
        dispatch(getListMoviesRequest({ page: 1 }));
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [dispatch, numPage]);

    const handleScroll = () => {
        const listItem = document.querySelector('#listItem') as HTMLElement;
        const footer = document.querySelector('#footer') as HTMLElement;
        if (
            window.scrollY + window.innerHeight >=
            listItem.clientHeight + listItem.offsetTop + footer.clientHeight - 330
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
                {list.map((item: any, index) => {
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