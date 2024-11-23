import { Link } from "react-router-dom";
import homeButton from '../../../../assets/template/homeButton.webp'
import styles from './HomeMenuBtn.module.css'

const HomeMenuBtn = ({homeContents, scrollIndex}) => {


  return (
    <button id={styles.homeMenuBtn} className='btn order-md-1 position-relative'>
            <Link to={homeContents[scrollIndex].path}>
                <p className=" absolute-center-element ms-2 text-dark fs-md-3 fs-5 fw-bold">GO!</p>
                <img
                src={homeButton}
                className="w-100"
                alt="button image-wrap"
                />
            </Link>
        </button>
  );
};

export default HomeMenuBtn;


