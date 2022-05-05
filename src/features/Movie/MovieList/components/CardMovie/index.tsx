import styles from './style.module.scss';
import dayjs from "dayjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { IMG_URL_CardMovie } from 'constants/movie';
import Loading from 'components/Loading';

type Props = {
    title: string,
    vote_average: number,
    release_date: number,
    poster_path: any,
    id: number,
};

const CardMovie: React.FC<Props> = ({ title, vote_average, release_date, poster_path, id }) => {

    const history = useHistory();
    const handleOnclick = (id: any) => {
        history.push(`/movie/${id}`)
        { <Loading /> }
    }

    return (
        <div className={styles.card_movie} >
            <div className={styles.card_movie_content}>
                <div className={styles.card_movie_img}>
                    <div className={styles.img} onClick={() => handleOnclick(id)}>
                        <img src={IMG_URL_CardMovie + poster_path} alt="img card movie" />
                    </div>
                    <div className={styles.card_movie_percent}>
                        <div className={styles.percent}>{vote_average * 10}
                            <FontAwesomeIcon className={styles.icons} icon={faPercent} />
                        </div>
                    </div>
                    <div className={styles.card_movie_option}>
                        <div className={styles.option}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    </div>
                </div>
                <div className={styles.card_movie_content}>
                    <div className={styles.items} onClick={() => handleOnclick(id)}>{title}</div>
                    <div className={styles.day}>{`${dayjs(`${release_date}`).format("MMM D, YYYY")}`}</div>
                </div>
            </div>
        </div>
    );
}

export default CardMovie;