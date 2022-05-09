import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMG_URL_Recommen } from "constants/movie";
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieAPI from "services/MovieAPI";
import style from "./style.module.scss";

const Recommendations = () => {
  
    const [data, setData] = useState<string[]>([]);
    const { id } = useParams<any>();
    useEffect(() => {
      const fetchRecommen = async () => {
        try {
          const reponse: any = await movieAPI.getRecommendations(id);
          setData(reponse.results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchRecommen();
    }, [id]);
    
  return (
    <section id={style["panel-recommen"]}>
      <h3>Recommendations</h3>
      <div className={style.recommen_scroll}>
        <ul className={style.recommen_scroll_list}>
          {data.length > 0 &&
            data.map((item: any, index: number) => (
              <li key={index} className={style.recommen_scroll_movie}>
                <div className={style.image_content}>
                  <a href="/">
                    <img
                      src={IMG_URL_Recommen + item.backdrop_path}
                      alt={item.title}
                      width="250px"
                      height="141px"
                    ></img>
                    <div className={style.movie_date}>
                      <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faCalendarWeek} />
                      <span style={{ marginLeft: "10px" }}>
                        {item.release_date}
                      </span>
                    </div>
                  </a>
                </div>
                <p className={style.movie_title}>
                  <a href="/">
                    {item.title.length > 20
                      ? `${item.title.substring(0, 20)}...`
                      : item.title}
                  </a>
                  <span>{Math.round(item.vote_average * 10)}%</span>
                </p>
              </li>
            ))}
        </ul>
        <div className={style.wapper}></div>
      </div>
    </section>
  );
}

export default Recommendations;
