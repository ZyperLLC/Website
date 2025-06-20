'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Assets
import img1 from '@/public/dolphin_1.jpg'
import img2 from '@/public/dolphin_2.jpg'
const ArrowUrl = '/icons/Arrow.svg'



const images = [img1, img2]

const Carousel = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ type: 'fraction' }}
          navigation={true}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center bg-[#0f0f0f] rounded-2xl overflow-hidden">
              <Image
                src={img}
                alt={`Dolphin ${i + 1}`}
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            width: 2.5rem;
            height: 2.5rem;
            background-color: white;
            mask: url(${ArrowUrl}) no-repeat center;
            -webkit-mask: url(${ArrowUrl}) no-repeat center;
            background-size: contain;
            color: transparent;
            top: 50%;
            transform: translateY(-50%);
          }

          .swiper-button-prev {
            transform: translateY(-50%) rotate(180deg);
            left: -2rem;
          }

          .swiper-button-next {
            right: -2rem;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            display: none;
          }
        `}</style>
      </div>
    </div>
  )
}

export default Carousel
