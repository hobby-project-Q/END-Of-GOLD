import style from './GlobalFooter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function GlobalFooter() {
    return (
        <footer className={style.footerBox}>
        <p>Copyright 2020. 황금의끝자락</p>
        <nav>
            <a href="https://github.com/DanBi-Lee/" target="_blank"  rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://github.com/DanBi-Lee/" target="_blank" title="트위터"  rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter } />
            </a>
        </nav>
    </footer>
    );
}

export default GlobalFooter;