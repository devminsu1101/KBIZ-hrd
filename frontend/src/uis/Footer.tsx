import Button from "@/components/Button"
import style from "./Footer.module.css"

export default function Footer () {

  return (
    <div className={style.container}>
      <div className={style.navigation}>
        <Button
          text="A"
          url="/A"
        /> 
        <Button
          text="B"
          url="/B"
        /> 
        <Button
          text="C"
          url="/C"
        /> 
      </div>
      <div className={style.logo}>KBIZ</div>
      <div className={style.explain}>
        <p>address : </p>
        <p>Tel : </p>
        <p>E-mail : </p>
        <p>Copyright 2023. KBIZ. all right reserved </p>
      </div>
    </div>
  )
}