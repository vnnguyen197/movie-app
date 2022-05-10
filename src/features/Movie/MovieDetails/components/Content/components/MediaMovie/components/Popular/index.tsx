import { IMG_URL_Youtube } from 'constants/movie';
import React, { useState } from 'react';
import style from "./style.module.scss";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalMovie from 'components/Modal/ModalMovie';

type ToDoProps = {
  video: any;
  poster_1: any;
  poster_2: any;
};

const Popular: React.FC<ToDoProps> = ({ video, poster_1, poster_2 }) => {

  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className={style.popular_detail}>
      <ul>
        <li>
          <div
            className={style.video_detail}
            style={{
              background: `
                url('${IMG_URL_Youtube + video?.key}/hqdefault.jpg')
                no-repeat
              `,
            }}
          >
            <FontAwesomeIcon className={style.icons} icon={faCirclePlay} onClick={() => { setOpenModal(true) }} size="lg" fixedWidth />
            <ModalMovie key_id={video.key} show={openModal} handleSetModal={handleModal} />
          </div>
        </li>
        <li>
          <div className={style.video_detail}>
            <img
              src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster_1?.file_path}`}
              alt="Backdrops"
            ></img>
          </div>
        </li>
        <li>
          <div className={style.video_detail}>
            <img
              src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster_2?.file_path}`}
              alt="Backdrops"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Popular;