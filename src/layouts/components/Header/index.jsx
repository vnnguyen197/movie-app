import styles from './style.module.scss';
import logo from '../../../assets/images/icons.svg';
import search from '../../../assets/images/search.svg';
import plus from '../../../assets/images/plus.svg';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className={styles.header}>
            <div className={styles.contentHeader}>
                <div className={styles.listContentHeader}>
                    <div className={styles.headerLeft}>
                        <div className={styles.headerLeft_list_img}>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={styles.headerLeft_list_movies}> Movies
                            <div className={styles.list_movies}>
                                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className={styles.list}> Popular </div>
                                </Link>
                                <div className={styles.list}> Now Playing </div>
                                <div className={styles.list}> Upcoming </div>
                                <div className={styles.list}> Top Rated </div>
                            </div>
                        </div>
                        <div className={styles.headerLeft_list}> TV Shows </div>
                        <div className={styles.headerLeft_list}> People </div>
                        <div className={styles.headerLeft_list}> More </div>
                    </div>

                    <div className={styles.headerRight}>
                        <div className={styles.headerRight_list_img}>
                            <img src={plus} alt="plus" />
                        </div>
                        <div className={styles.headerRight_list_EN}> EN </div>
                        <div className={styles.headerRight_list}> Login </div>
                        <div className={styles.headerRight_list}> Join TMDB </div>
                        <div className={styles.headerRight_list_search}>
                            <img src={search} alt="search" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Index;
