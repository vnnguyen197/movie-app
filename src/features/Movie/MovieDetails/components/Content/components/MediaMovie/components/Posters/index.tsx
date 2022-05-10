import { IMG_URL_CardMovie } from "constants/movie";
import style from "./style.module.scss"



const PosterList = (props: any) => {
  const data = props.data;
  return (
    <div className={style.video_detail}>
      <img
        src={IMG_URL_CardMovie + data?.file_path}
        alt="Backdrops"
      ></img>
    </div>
  );
}

export default PosterList;