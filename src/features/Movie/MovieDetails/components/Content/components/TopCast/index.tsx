import { faArrowRight, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMG_URL_TopCast } from "constants/movie";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

const TopCast = () => {

  const listData: any = useSelector((state) => state);
  const people = listData.people.list.cast;
  
  return (
    <div className={style.top_cast}>
      <h3>Top Billed Cast</h3>
      <div className={style.cast_scroller}>
        <ul className={style.list_cast}>
          {people &&
            people.map(
              (item: any, index: number) =>
                index < 9 && (
                  <li key={index} className={style.profile_cast}>
                    {item.profile_path === null ? (
                      <a className={style.image_null}>
                        <FontAwesomeIcon icon={faUserAlt} />
                      </a>
                    ) : (
                      <a className={style.image_topcast}>
                        <img
                          src={IMG_URL_TopCast + item.profile_path}
                          alt={item.name}
                        ></img>
                      </a>
                    )}
                    <p className={style.title}>{item.name}</p>
                    <p className={style.character}>{item.character}</p>
                  </li>
                )
            )}
          <li className={style.view_more}>
            <a>
              View More{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </li>
          <div className={style.wapper}></div>
        </ul>
      </div>
      <a className={style.view_full}>
        Full Cast & Crew
      </a>
    </div>
  );
}

export default TopCast;
