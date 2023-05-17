// Style
import style from "../../css/sections/SectionTitle.module.css";

const SectionTitle = ({ name, title }) => {
  return (
    <div className={style.section_title}>
      <div className={style.line}>
        <span></span>
      </div>
      <div className={style.text}>
        <h4>{name}</h4>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
