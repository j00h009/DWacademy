import styles from "./Button.module.css";
import classNames from "classnames";
// ↑ className을 여러개 붙이고 싶을 때 적용하는 것.

function Button({ className, variant, isDiv, ...restProps }) {
  if (isDiv === "div")
    // console.log(restProps);
    // ↑ Object children : "지금 시작하기"
    // children="버튼" = {...restProps} => 동일한 내용
    return (
      <div
        {...restProps}
        className={classNames(
          styles.button,
          variant && styles[variant],
          className
        )}
      />
    );
  //   console.log(styles[variant]);
  // style.css안에 class는 객체의 key 값을 동적으로 바꾸고 싶을 때 사용한다.

  return (
    <button
      {...restProps}
      className={classNames(
        styles.button,
        variant && styles[variant],
        className
      )}
    />
  );
}

export default Button;
