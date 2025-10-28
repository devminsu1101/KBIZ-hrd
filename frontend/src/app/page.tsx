
import Button from "@/components/Button";
import style from "./page.module.css";

export default function Home() {

  return (
    <div className={style.page}>
      <div className={style.carousel}>

      </div>
      <div className={style.details}>
        <div className={style.icons}>
          <Button 
            text="전체"
          />
          <Button 
            text="노란우산"
          />
          <Button 
            text="협동조합"
          />
          <Button 
            text="단체표준"
          />
          <Button 
            text="CEO"
          />
          <Button 
            text="기업교육"
          />
        </div>
        <div className={style.edulist}></div>
      </div>
      <div className={style.mythings}>
        <Button 
          text="내 교육신청"
        />
        <Button 
          text="수료증 출력"
        />
        <Button 
          text="연간 교육일정"
        />
        <Button 
          text="1:1 문의"
        />
      </div>
      <div className={style.notice}>
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
