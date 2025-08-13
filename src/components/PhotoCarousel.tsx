import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface PhotoCarouselProps {
  images: { src: string; alt?: string; caption?: string }[]
  vertical?: boolean
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images, vertical = false }) => {
  return (
    <div className="w-full max-w-18xl mx-auto py-20 px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Galerie photos</h2>

      <Swiper
        spaceBetween={20}
        navigation
        loop={true}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="overflow-visible"
      >
        {images.map(({ src, alt, caption }, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-lg overflow-hidden shadow-lg ${
                vertical ? 'aspect-[9/16]' : 'aspect-video'
              } relative`}
            >
              <img src={src} alt={alt || `Photo ${index + 1}`} className="w-full h-full object-cover" />
              {caption && (
                <div className="absolute bottom-0 w-full bg-black/50 text-white text-center text-sm py-10">
                  {caption}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PhotoCarousel
