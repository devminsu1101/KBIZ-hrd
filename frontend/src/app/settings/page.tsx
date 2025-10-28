'use client'

import { useEffect, useState } from "react"

export default function Settings () {

  const [ nowFont, setNowFont ] = useState("")
  useEffect(() => {
    const bodyFont = window.getComputedStyle(document.body).fontFamily
    // winidow.getComputedStyle(element) : 브라우저가 실제 렌더링할 때 적용한 최종 스타일 반환
    setNowFont(bodyFont)
  }, [])


  return (
    <div>
      <p>지금 페이지의 폰트는 : {nowFont} </p>
    </div>
  )
}