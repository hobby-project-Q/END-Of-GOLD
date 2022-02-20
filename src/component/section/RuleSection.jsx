import { Link } from "react-router-dom";
import SectionLayout from "./template/SectionLayout";
import style from './RuleSection.module.css';

function RuleSection() {
    return (
        <>
            <SectionLayout title="룰별 이미지 만들기">
            <div className={style.list}>
                <article className={style.card}>
                    <Link to="insane">인세인</Link>
                </article>
                <article className={style.card}>
                    <Link   Link to="shinobigami">시노비가미</Link>
                </article>
                <article className={style.card}>
                    <Link   Link to="coc">크툴루의 부름</Link>
                </article>
            </div>
            </SectionLayout>
        </>
    );
}

export default RuleSection;