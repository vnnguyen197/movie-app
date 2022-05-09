import { useAppSelector } from "app/hooks";
import { IMG_URL_ViewCollection } from "constants/movie";
import style from "./style.module.scss";

const ViewCollection = () => {
  
  const listData = useAppSelector((state) => state.movies);
  const data = listData.detail;
  return (
    <section className={style.panel_collection}>
      {data.belongs_to_collection && (
        <div
          className={style.background}
          style={{
            background: `
              linear-gradient(
                to right,
                rgb(11 36 40 / 78%) 0%, rgb(25 79 81 / 69%)
              ),
              url("${IMG_URL_ViewCollection + data.belongs_to_collection.backdrop_path}")`, }}>
          <div className={style.title}>
            <h3>Part of the {data.belongs_to_collection.name}</h3>
            <h5>Includes {data.title}</h5>
          </div>
          <button>VIEW THE COLLECTION</button>
        </div>
      )}
    </section>
  );
}

export default ViewCollection;