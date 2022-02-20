import style from "./SectionLayout.module.css";

function SectionLayout({children, title, desc}) {
    return (
        <section className={style.box}>
            <div className="wrap">
                <h2 className={style.title}>{title}</h2>
                {desc && <p>{desc}</p>}
                {children}
            </div>
        </section>
    );
}

export default SectionLayout;