import {
    faFacebookSquare,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faCommentDots,
    faKeyboard,
    faLink,
    faLock,
    faPaperPlane,
  } from "@fortawesome/free-solid-svg-icons";
import Chart from 'assets/images/chart.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import MovieAPI from "services/MovieAPI";
import style from "./style.module.scss";
import { useAppSelector } from "app/hooks";
import { IMG_URL_Contributors1, IMG_URL_Contributors2, IMG_URL_Contributors3, IMG_URL_Contributors4 } from "constants/movie";
  
  const ContentRight = () => {

    const [keywords, setKeywords] = useState([]);
    const [detail, loading] = useAppSelector(({ movies: { detail, loading } }) => [detail, loading]);
    const { id } = useParams<any>();
  
    useEffect(() => {
      const getKeyWords = async () => {
        try {
          const reponse: any = await MovieAPI.getKeyWordMovie(id);
          setKeywords(reponse.keywords);
        } catch (error) {
          console.log(error);
        }
      };
      getKeyWords();
    }, [id]);
   
    // if (loading === true) {
    //     return <div>Loading...</div>;
    //   }
  
    return (
      <section className={style.content_right}>
        <div className={style.content_network}>
          <div className={style.icons}>
            <a> <FontAwesomeIcon icon={faFacebookSquare}/> </a>
          </div>
          <div className={style.icons}> 
          <a> <FontAwesomeIcon icon={faTwitter}/> </a>
          </div>
          <div className={style.icons}>
            <a> <FontAwesomeIcon icon={faInstagram}/> </a>
          </div>
          <div className={style.icons}>
            <a> <FontAwesomeIcon icon={faPaperPlane}/> </a>
          </div>
          <div className={style.icons}>
            <a> <FontAwesomeIcon  icon={faLink} /> </a>
          </div>
        </div>
        <div className={style.content_infor}>
          <p>
            <strong>Status</strong>
            <br />
            {detail.status}
          </p>
          <p>
            <strong>Original Language</strong>
            <br />
            {detail.original_language === "en" && "English"}
          </p>
          <p>
            <strong>Budget</strong>
            <br />${detail.budget}
          </p>
          <p>
            <strong>Revenue</strong>
            <br />${detail.revenue}
          </p>
        </div>
        <div className={style.content_keywords}>
          <h4>Keywords</h4>
          <ul className={style.list_keywords}>
            {keywords.length > 0 &&
              keywords.map((word: any, index: number) => (
                <li key={index}>
                  <a>{word.name}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className={style.content_score}>
          <h4>Content Score</h4>
          <div className={style.content}>
            <div className={style.score}>100</div>
            <p>Yes! Looking good!</p>
          </div>
        </div>
        <div className={style.top_contributor}>
          <h4>Top Contributors</h4>
          <div className={style.leader}>
            <div className={style.avatar}>
              <img
                src={IMG_URL_Contributors1}
                alt="avatar"
                width="40px"
                height="40px"
              ></img>
            </div>
            <div className={style.info}>
              <p>
                144 <br />
                <a href="/">raze464</a>
              </p>
            </div>
          </div>
          <div className={style.leader}>
            <div className={style.avatar}>
              <img
                src={IMG_URL_Contributors2}
                alt="avatar"
                width="40px"
                height="40px"
              ></img>
            </div>
            <div className={style.info}>
              <p>
                144 <br />
                <a href="/">singleton</a>
              </p>
            </div>
          </div>
          <div className={style.leader}>
            <div className={style.avatar}>
              <img
                src={IMG_URL_Contributors3}
                alt="avatar"
                width="40px"
                height="40px"
              ></img>
            </div>
            <div className={style.info}>
              <p>
                197 <br />
                <a>jornicolas</a>
              </p>
            </div>
          </div>
          <div className={style.leader}>
            <div className={style.avatar}>
              <img
                src={IMG_URL_Contributors4}
                alt="avatar"
                width="40px"
                height="40px"
              ></img>
            </div>
            <div className={style.info}>
              <p>
                64 <br />
                <a>agnizheb</a>
              </p>
            </div>
          </div>
          <p style={{ marginTop: "20px" }}>
            <a>View Edit History</a>
          </p>
        </div>
        <div className={style.pop_trend}>
          <h4>Popularity Trend</h4>
          <img src={Chart} style={{ marginTop: "30px", width: "198px", height: "45px" }}></img>
        </div>
        <div className={style.button_login}>
          <Button className={style.login_btn}>
            <FontAwesomeIcon icon={faLock} size="sm" fixedWidth />
            <span style={{ marginLeft: "5px" }}>LOGIN TO EDIT</span>
          </Button>
        </div>
        <div className={style.popup_keybord}>
          <FontAwesomeIcon icon={faKeyboard} size="sm" fixedWidth />
          <span style={{ marginLeft: "5px" }}>Keyboard Shortcuts</span>
        </div>
        <p style={{ marginTop: "30px" }}>
          <FontAwesomeIcon icon={faCommentDots} size="sm" fixedWidth />
          <span style={{ marginLeft: "5px" }}>Login to report an issue</span>
        </p>
      </section>
    );
  }
  
  export default ContentRight;
  