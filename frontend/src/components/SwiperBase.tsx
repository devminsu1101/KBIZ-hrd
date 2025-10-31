import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

interface SwiperProps {
  slides : React.ReactNode[]
  slidesPerView? : number
  spaceBetween? : number
}

export default function SwiperBase({
  slides, 
  slidesPerView = 1, // 기본값 
  spaceBetween = 50, 
} : SwiperProps ) {

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable : true }}
      scrollbar={{ draggable : true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide 
          key={index}
          style={{
            display : "flex", 
            justifyContent : "center", 
            alignItems : "center"
          }} // SwiperSlide 내의 slide 정렬을 위한 style 
        >
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}