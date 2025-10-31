'use client' 

import SwiperBase from "@/components/SwiperBase";
import style from "./page.module.css";

export default function Home() {

  const slides = [
    <div key="1" style={{height : "100px" , backgroundColor : "Highlight"}}>main baner 1</div>, 
    <div key="2" style={{height : "100px" , backgroundColor : "Highlight"}}>main baner 2</div>, 
    <div key="3" style={{height : "100px" , backgroundColor : "Highlight"}}>main baner 3</div>, 
  ] // 임시 데이터, 추후 카드로 전환하기 (키와 컴포넌트 카드 받기)

  return (
    <div className={style.page}>
      <div className={style.carousels}>
        <SwiperBase
          slides={slides}
        /> 
      </div>
      <div className={style.details}>
        <div className={style.icons}>
          <div className={style.icon}>전체</div>
          <div className={style.icon}>노란우산</div>
          <div className={style.icon}>협동조합</div>
          <div className={style.icon}>단체표준</div>
          <div className={style.icon}>CEO</div>
          <div className={style.icon}>기업교육</div>
        </div>
        <div className={style.edulist}>
          <p>내용 1</p>
          <p>내용 2</p>
          <p>내용 3</p>
        </div>
      </div>
      <div className={style.mythings}>
        <div className={style.thing}>내 교육신청</div>
        <div className={style.thing}>수료증 출력</div>
        <div className={style.thing}>연간 교육일정</div>
        <div className={style.thing}>1:1 문의</div>
      </div>
      <div className={style.notices}>
        <div className={style.notice}>
          <p>공지사항</p>
          <div className={style.lists}>lists</div>
        </div>
        <div className={style.faq}>
          <p>FAQ</p>
          <div className={style.lists}>lists</div>
        </div>
      </div>
    </div>
  );
}
