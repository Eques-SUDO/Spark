import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Play } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface VideoCarouselProps {
  videos: string[]
  vertical?: boolean
}

// Utility to convert Shorts or watch URLs to embeddable form
const getEmbedUrl = (url: string) => {
  try {
    const shortMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/)
    const watchMatch = url.match(/v=([a-zA-Z0-9_-]+)/)
    const id = shortMatch?.[1] || watchMatch?.[1]
    return id ? `https://www.youtube.com/embed/${id}?controls=1` : url
  } catch {
    return url
  }
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, vertical = false }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center mb-3">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg">
            <Play className="w-3 h-3 mr-1.5" />
            Vidéos
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Découvrez en vidéo
        </h2>
        <p className="text-base text-gray-600 max-w-xl mx-auto">
          Plongez dans l'univers créatif de Spark Morocco
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: videos.length >= 3 ? 3 : videos.length }
        }}
        className="!pb-12"
      >
        {videos.map((videoUrl, index) => (
          <SwiperSlide key={index}>
            <div className="group cursor-pointer">
              <div
                className={`rounded-2xl overflow-hidden shadow-2xl bg-white p-4 group-hover:scale-105 transition-all duration-300 ${
                  vertical ? 'aspect-[9/16]' : 'aspect-video'
                }`}
              >
                <div className="relative rounded-xl overflow-hidden h-full bg-gray-900">
                  {/* Video overlay for better visual */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                  
                  <iframe
                    src={getEmbedUrl(videoUrl)}
                    title={`Video ${index + 1}`}
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Play button overlay - only visible before interaction */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video info */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Spark Morocco #{index + 1}
                </h3>
                <p className="text-sm text-gray-500">
                  Découvrez nos créations
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #dc2626 !important;
          background: white;
          width: 48px !important;
          height: 48px !important;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 18px !important;
        }
        
        :global(.swiper-pagination-bullet) {
          background: #dc2626 !important;
          opacity: 0.3;
        }
        
        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
          width: 24px !important;
          border-radius: 12px !important;
        }
      `}</style>
    </div>
  )
}

export default VideoCarousel
