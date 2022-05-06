import styles from './style.module.scss';
import logo from 'assets/images/logo-footer.svg';

const Index = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footer_list_items}>
                <div className={styles.footer_list_img}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.footer_list_button}> JOIN THE COMMUNITY </div>
            </div>
            <div className={styles.footerNav}>
                <div className={styles.footer_list}>
                    <div className={styles.title}> THE BASICS </div>
                    <div> About TMDB </div>
                    <div> Contact Us </div>
                    <div> Support Forums </div>
                    <div> API </div>
                    <div> System status </div>
                </div>
                <div className={styles.footer_list}>
                    <div className={styles.title}> GET INVOLVED </div>
                    <div> Contribution Bible </div>
                    <div> Add New Movie </div>
                    <div> Add New TV Show </div>
                </div>
                <div className={styles.footer_list}>
                    <div className={styles.title}> COMMUNITY </div>
                    <div> Guidelines </div>
                    <div> Discussions </div>
                    <div> LeaderBoard </div>
                    <div> Twitter </div>
                </div>
                <div className={styles.footer_list}>
                    <div className={styles.title}> LEGAL </div>
                    <div> Terms of Use </div>
                    <div> API Terms of Use </div>
                    <div> Provacy Policy </div>
                </div>
            </div>
        </footer>
    );
}

export default Index;