import style from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={style.headerBox}>
            <div class={`${style.wrap} wrap `}>
                <img src="" alt="로고"/>
                <h1>황금의 끝자락</h1>
                <a
                    href="https://github.com/DanBi-Lee/End-of-Gold2"
                    target="_blank"
                    class={style.linkButton}
                    rel="noreferrer">사이트 소개</a>
            </div>
        </header>
    );
}

export default MainHeader;