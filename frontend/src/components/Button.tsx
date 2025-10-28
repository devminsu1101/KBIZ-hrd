'use client'

import { useRouter } from "next/navigation"
import style from "./Button.module.css"

interface ButtonProps {
  text : string
  color? : string 
  url : string 
}

export default function Button ({ text, color, url } : ButtonProps ) {

  const router = useRouter()
  const onClick = () => {
    router.push(url)
  }

  return (
    <div 
      className={style.wrap}
      onClick={onClick}
      style={{ backgroundColor : color}}
    >
      {text}
    </div>
  )
}