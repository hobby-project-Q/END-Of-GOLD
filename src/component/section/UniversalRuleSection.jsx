import { Link } from "react-router-dom";
import SectionLayout from "./template/SectionLayout";
import style from './UniversalRuleSection.module.css';

function UniversalRuleSection(){
    return (
        <SectionLayout title="범용 이미지 만들기" desc="원하는 룰이 없을때 사용 가능">
            <div className={style.list}>
                <article className={style.card}>
                    <Link to="universal/session-card">세션카드</Link>
                </article>
                <article className={style.card}>
                    <Link   Link to="universal/table-map">테이블 맵</Link>
                </article>
                <article className={style.card}>
                    <Link   Link to="universal/tocken">토큰</Link>
                </article>
                <article className={style.card}>
                    <Link   Link to="universal/handout">핸드아웃</Link>
                </article>
            </div>
        </SectionLayout>
    );
}

export default UniversalRuleSection;