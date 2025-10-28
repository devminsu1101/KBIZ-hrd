

import style from "./Header.module.css"

export default function Header () {

  return (
    <div
      className={style.container}
    >
      <div className={style.left}>
        <div className={style.logo}>logo</div>
      </div>
      <div className={style.right}>
        <div className={style.mypage}>mypage</div>
        <div className={style.login}>log in</div>
        <div className={style.signup}>sign up</div>
      </div>
    </div>
  )
}