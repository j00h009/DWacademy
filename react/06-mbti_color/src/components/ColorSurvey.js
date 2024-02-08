import styles from "./ColorSurvey.module.css";

// public 에 저작권이 있는 파일들을 원래는 넣으면 안됨 => 되도록이면 쓰지말자.
// public 공공 폴더에 img 파일들을 넣어 src에 링크로 불러올 수 있다.

function ColorSurvey({ value, onClick }) {
  return (
    <div className={styles.colorSurvey} onClick={onClick}>
      <div className={styles.id}>{value.id}</div>
      <div className={styles.mbti}>{value.mbti}</div>
      <div className={styles.arrow}>
        <img
          className={styles.arrowIcon}
          src="/images/arrow.svg"
          alt="arrow icon"
        />
      </div>
      <div
        className={styles.colorChip}
        style={{ backgroundColor: value.colorCode }}
      ></div>
      <div className={styles.colorCode}>{value.colorCode}</div>
    </div>
  );
}

export default ColorSurvey;
