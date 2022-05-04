import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from 'services/MovieAPI';
import Backdrops from './components/Backdrops';
import Popular from './components/Popular';
import PosterList from './components/Posters';
import Videos from './components/Videos';
import style from './style.module.scss';

function MediaMovie() {
  const [value, setValue] = useState(0);
  const [openPopular, setOpenPopular] = useState(true);
  const [openVideo, setOpenVideo] = useState(false);
  const [openBackdrops, setOpenBackdrops] = useState(false);
  const [openPoster, setOpenPoster] = useState(false);
  const [backdrops, setBackdrops] = useState([]);
  const [videos, setVideos] = useState([]);
  const [poster, setPoster] = useState([]);

  const { id } = useParams<any>();

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  const handleOpenPopular = () => {
    setOpenPopular(true);
    setOpenBackdrops(false);
    setOpenVideo(false);
    setOpenPoster(false);
  };
  const handleOpenVideo = () => {
    setOpenPopular(false);
    setOpenVideo(true);
    setOpenBackdrops(false);
    setOpenPoster(false);
  };
  const handleOpenBackdrops = () => {
    setOpenPopular(false);
    setOpenVideo(false);
    setOpenBackdrops(true);
    setOpenPoster(false);
  };
  const handleOpenPoster = () => {
    setOpenPopular(false);
    setOpenVideo(false);
    setOpenBackdrops(false);
    setOpenPoster(true);
  };
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response: any = await movieAPI.getAllVideos(id);
        setVideos(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [id]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response: any = await movieAPI.getAllImages(id);
        setBackdrops(response.backdrops);
        setPoster(response.posters);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [id]);

  if (videos.length === 0 || poster.length === 0) return <div>Loading...</div>;

  return (
    <section className={style.panel_media}>
      <div className={style.menu}>
        <h3>Media</h3>
        <Paper square className={style.tab_option_media}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example">

            <Tab className={style.tab} label="Most Popular" onClick={handleOpenPopular}/> 
            <Tab className={style.tab} label={`Videos ${videos.length} `} onClick={handleOpenVideo} />
            <Tab
              className={style.tab}
              label={`Backdrops ${backdrops.length}`}
              onClick={handleOpenBackdrops}
            />
            <Tab className={style.tab} label={`Poster ${poster.length}`} onClick={handleOpenPoster} />
          </Tabs>
        </Paper>
      </div>

      <div className={style.content_media}>

        {openPopular && (
          <Popular
            video={videos[0]}
            poster_1={poster[0]}
            poster_2={poster[1]}
          />
        )}

        {openVideo && (
          <ul className={style.media_videos}>
            {videos.map(
              (data, index) =>
                index < 6 && (
                  <li key={index}>
                    <Videos data={data} />
                  </li>
                )
            )}
            <li className={style.view_more}>
              <div className={style.link}>
                <a className={style.view_more_link}>
                  View More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" fixedWidth />
                  </span>
                </a>
              </div>
            </li>
          </ul>
        )}

        {openBackdrops && (
          <ul className={style.media_videos}>
            {backdrops.map(
              (data, index) =>
                index < 10 && (
                  <li key={index}>
                    <Backdrops data={data} />
                  </li>
                )
            )}
            <li className={style.view_more}>
              <div className={style.link}>
                <a className={style.view_more_link}>
                  View More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" fixedWidth />
                  </span>
                </a>
              </div>
            </li>
          </ul>
        )}

        {openPoster && (
          <ul className={style.media_videos}>
            {poster.map(
              (data, index) =>
                index < 10 && (
                  <li key={index}>
                    <PosterList data={data} />
                  </li>
                )
            )}
            <li className={style.view_more}>
              <div className={style.link}>
                <a className={style.view_more_link}>
                  View More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" fixedWidth />
                  </span>
                </a>
              </div>
            </li>
          </ul>
        )}

      </div>
      <div className={style.wapper}></div>
    </section>
  );
}

export default MediaMovie;