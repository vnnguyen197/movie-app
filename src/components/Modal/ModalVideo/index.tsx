import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from 'services/MovieAPI';

const ModalVideo = ({ closeModal }:any) => {

    const { id } = useParams<any>();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response: any = await movieAPI.getAllVideos(id);
                const finalTrailers = response.results.find((item: any) => item.name.includes("Official Trailer"))
                setVideos(finalTrailers.key);
            } catch (error) {
                console.log(error);
            }
        };
        fetchVideos();
    }, [id]);

    return (
        <div className={style.modal}>
            <div className={style.modalBanner}>
                <div className={style.playTrailer}>
                    <div className={style.title}>
                        Play Trailer
                        <button onClick={closeModal}> X </button>
                    </div>
                </div>
                <div className={style.trailerYoutube}>
                    <iframe src={`https://www.youtube.com/embed/${videos}?autoplay=1&mute=0`}> </iframe>
                </div>
            </div>
        </div>
    )
}

export default ModalVideo;