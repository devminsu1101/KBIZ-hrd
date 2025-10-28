

import Button from "@/components/Button"
import style from "./Header.module.css"

export default function Header () {

  return (
    <div
      className={style.container}
    >
      <div className={style.left}>
        <div className={style.logo}>
          <Button 
            text="KBIZ"
            url="/"
          />
        </div>
      </div>
      <div className={style.center}>
        <div className={style.navitem}>노란우산</div>
        <div className={style.navitem}>협동조합</div>
        <div className={style.navitem}>단체표준</div>
        <div className={style.navitem}>CEO</div>
        <div className={style.navitem}>기업교육</div>
      </div>
      <div className={style.right}>
        <div className={style.setting}>
          <Button 
            text="settings"
            url="/settings"
          />
        </div>
        <div className={style.mypage}>mypage</div>
        <div className={style.login}>log in</div>
        <div className={style.signup}>sign up</div>
        <div className={style.hamburger}>hamburger</div>
      </div>
    </div>
  )
}