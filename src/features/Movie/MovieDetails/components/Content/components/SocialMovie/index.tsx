import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { discussion } from 'constants/movie/discussion';
import { default as dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from 'services/MovieAPI';
import style from './style.module.scss';
import { IMG_URL_ReadMore, IMG_URL_SocialMovie } from 'constants/movie';

interface Data {
  author: string;
  author_details: { avatar_path: string; rating: string };
  release_date: string;
  content: string;
}
export const initData: Array<Data> = [
  {
    author: ' ',
    author_details: { avatar_path: '', rating: '' },
    release_date: '',
    content: '',
  },
];

function SocialMovie() {
  const [value, setValue] = useState(0);
  const [openReview, setOpenReview] = useState(true);
  const [openDisc, setOpenDisc] = useState(false);
  const [data, setData] = useState(initData);

  const { id } = useParams<any>();

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  const handleOpenReview = () => {
    setOpenReview(true);
    setOpenDisc(false);
  };
  const handleOpenDicussions = () => {
    setOpenReview(false);
    setOpenDisc(true);
  };

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reponse: any = await movieAPI.getReviewMovie(id);
        setData(reponse.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview();
  }, [id]);

  if (data.length > 0) {
    if (data[0].author === '') return <div>Loading...</div>;
  }
  return (
    <section className={style.special_pannel}>
      <div className={style.menu}>
        <h3>Social</h3>
        <Paper square className={style.tab_option}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example">
            <Tab className={style.tab} label={`Reviews ${data.length}`} onClick={handleOpenReview} />
            <Tab
              className={style.tab}
              label={`discussions ${discussion.length}`}
              onClick={handleOpenDicussions}
            />
          </Tabs>
        </Paper>
      </div>
      <div className={style.content}>
        
        {openReview && data.length > 0 && (
          <div className={style.content_review}>
            <div className={style.content_review_inner}>
              <div className={style.card}>
                <div className={style.profile}>
                  <div className={style.avatar}>
                    <a>
                      <img
                        src={IMG_URL_SocialMovie}
                        alt={data[0].author}
                        height="64px"
                        width="64px"
                      ></img>
                    </a>
                  </div>
                  <div className={style.infor}>
                    <div className={style.rating}>
                      <h3>
                        <a href="/">A review by {data[0].author}</a>
                      </h3>
                      {data[0].author_details.rating !== null && (
                        <div className={style.rate}>
                          <FontAwesomeIcon
                            color="white"
                            icon={faStar}
                            size="sm"
                            fixedWidth
                          />
                          <span>{data[0].author_details.rating}.0</span>
                        </div>
                      )}
                    </div>
                    <h5>
                      Written by{" "}
                      <span style={{ color: "#727272" }}>{data[0].author}</span>{" "}
                      on {dayjs(data[0].release_date).format("MMM DD, YYYY")}
                    </h5>
                  </div>
                </div>
                <div className={style.teaser}>
                    <p className={style.content_teaser}>
                      {data[0].content}
                    </p>
                    <div className={style.read_more}>
                        <a href={IMG_URL_ReadMore}>read more</a>
                    </div>
                </div>
              </div>
            </div>
            <a style={{ marginTop: '20px',marginBottom: '20px', fontWeight: '500', fontSize: '17px' }}>
              Read All Reviews
            </a>
          </div>
        )}

        {openDisc && (
          <div className={style.content_discussions}>
            <table className={style.list_discuss}>
              <tbody>
                {discussion.map((item:any, index: number) => (
                  <tr key={index}>
                    <td className={style.discuss_infor}>
                      <div className={style.post_infor}>
                        <div className={style.avatar}>
                          <img src={item.avatar} alt={item.name}></img>
                        </div>
                        <div className={style.desc}>{item.description}</div>
                      </div>
                    </td>
                    <td>{item.status}</td>
                    <td>{item.vote}</td>
                    <td className={style.discuss_date}>
                      {item.date}
                      <br />
                      by <b>{item.name}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
            <a style={{ marginTop: '20px',marginBottom: '20px', fontWeight: '500', fontSize: '17px' }}>
                Go to Discussions
              </a>
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default SocialMovie;