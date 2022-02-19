import GlobalFooter from "../footer/GlobalFooter";
import MainHeader from "../header/MainHeader";
import style from './MainLayout.module.css';

function MainLayout({children}){
    return (
        <div className={style.wrap}>
            <MainHeader />
            <main className={style.main}>
                {children}
            </main>
            <GlobalFooter />
        </div>
    );
}

export default MainLayout;