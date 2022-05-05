import hboMax from 'assets/images/hbo-max.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faPercent, faList, faHeart, faBookmark, faStar, faPlay, faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import dayjs from "dayjs";
import { useAppSelector } from 'app/hooks';
import { IMG_URL_Banner, IMG_URL_Poster } from 'constants/movie';
import styles from './style.module.css';
import ModalBanner from 'components/Modal/ModalBanner';
import ModalVideo from 'components/Modal/ModalVideo';
import Loading from 'components/Loading';

interface ContactFormProps {
  setOpenBanner: (param: boolean) => boolean;
  id: number,
}
interface Item {
  id: number;
  name:string;
}
interface ArrayItem {
  data: Item[]
}

const Banner = (props: ContactFormProps) => {

  const dataMovie = useAppSelector((state) => state);
  const detail = dataMovie.movies.detail;
  const people = dataMovie.people.list.crew;
  
  const [openModal, setOpenModal] = useState(false);
  const [openBanner, setOpenBanner] = useState(false);

  if (dataMovie.people.loading) {
    return <Loading />
  }

  const HandleSplitGenre = (item: any) => {
    if (!item) return;
    const GenreArray = detail?.genres.map((item: any) => item?.name);
    const handleSplitGenreArray = GenreArray.join(", ");
    return <span>{handleSplitGenreArray}</span>;
  };

  const handleCrew = (item: any) => {
    if (!item) return;
    const newCast = item.filter(
      (item: any) =>
        item?.job === "Director" ||
        item?.job === "Story" ||
        item?.job === "Screenplay" ||
        item?.job === "Characters" ||
        item?.job === "Writer" 
    )  

    return newCast.map((item: any, index: number) => (
      <li className="profile" key={index}>
        <p>
          <a>{item.name}</a>
        </p>
        <p>{item.job}</p>
      </li>
    ));
  };
  const handleCloseBanner = () => {
    setOpenBanner(!openBanner)
  }
  const handleCloseVideo = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className={styles.mainBanner} id={`${props.id}`}>
      <div className={styles.banner}
        style={{ backgroundImage: `url("${IMG_URL_Banner + detail.backdrop_path}")`, }}>
        <div className={styles.banner_header}>
          <div className={styles.banner_header_content}>
            <section className={styles.content}>
              <div className={styles.bannerLeft}>
                <div className={styles.poster_img}>
                  <div className={styles.poster}>
                    <img
                      src={IMG_URL_Poster + detail.poster_path}
                      alt={`banner-movie_${detail.id}`}
                    />
                  </div>
                  <div className={styles.expand} 
                  onClick={() => {
                    setOpenBanner(true);
                  }}
                  >
                    <span style={{ marginRight: "8px" }}>
                      <FontAwesomeIcon icon={faArrowsAlt}
                      />
                    </span>
                    Expand
                  </div>
                </div>
                <div className={styles.open}>
                  <img src={hboMax} alt="dowload" />
                  <div className={styles.text}>
                    <div className={styles.lists_text}>Now Streaming</div>
                    <a style={{ fontWeight: "600", }}>Watch Now</a>
                  </div>
                </div>
                 {openBanner && <ModalBanner closeBanners={handleCloseBanner} />} 
              </div>
              <div className={styles.bannerRight}>
                <div className={styles.header_poster}>
                  <div className={styles.title}>
                    <h2>
                      <a>{detail.original_title}</a>
                      <span className={styles.title_days}> ({dayjs(detail.release_date).year()}) </span>
                    </h2>
                    <div className={styles.facts}>
                      <span className={styles.facts1}>PG-13</span>
                      <span className={styles.facts2}>{styles.day}{`${dayjs(`${detail.release_date}`).format("MM/D/YYYY")}`} (US)</span>
                      <span className={styles.facts3}>
                        <FontAwesomeIcon className={styles.iconsCircle} icon={faCircle} />
                        {HandleSplitGenre(detail?.genres)}
                      </span>
                      <span className={styles.facts4}>
                        <a className={styles.circle}><FontAwesomeIcon className={styles.iconsCircle} icon={faCircle} /></a>
                        {Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m  </span>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.lists1}>
                      <div className={styles.items1}>
                        <div className={styles.percent}>{detail.vote_average * 10}
                          <FontAwesomeIcon className={styles.icons} icon={faPercent} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.items2}>User Score</div>
                    <div className={styles.items3}>
                      <FontAwesomeIcon icon={faList} />
                      <div className={styles.popover_item}>
                        Login to create and edit custom lists
                      </div>
                    </div>
                    <div className={styles.items4}>
                      <FontAwesomeIcon icon={faHeart} />
                      <div className={styles.popover_item_heart}>
                        Login to add this movie to your favorite list
                      </div>
                    </div>
                    <div className={styles.items5}>
                      <FontAwesomeIcon icon={faBookmark} />
                      <div className={styles.popover_item_bookmark}>
                        Login to add this movie to your watchlist
                      </div>
                    </div>
                    <div className={styles.items51}>
                      <FontAwesomeIcon icon={faStar} />
                      <div className={styles.popover_item_star}>
                        Login to rate this movie
                      </div>
                    </div>
                    <div className={styles.items6} onClick={() => {
                      setOpenModal(true);
                    }}>
                      <FontAwesomeIcon icon={faPlay} className={styles.iconfaPlay} />Play Trailer
                    </div>
                  </div>
                  <div className={styles.header_info}>
                    <h1 className={styles.challenge}>{detail.tagline}</h1>
                    <h1>Overview</h1>
                    <div className={styles.overview}>
                      <p>{detail.overview}</p>
                    </div>
                    <ol className={styles.people}>
                      {handleCrew(people)}
                    </ol>
                  </div>   
                   {openModal && <ModalVideo closeModal={handleCloseVideo} />}  
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner;  
