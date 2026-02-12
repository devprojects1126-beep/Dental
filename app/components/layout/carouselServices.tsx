"use client"
import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"
import { Fetch } from "@/app/hooks/fetch"


export const CarouselServices = () => {
    
    // const urlServices = "http://localhost:8000/services"
    // const {services:Services} = Fetch(urlServices)
    const {services:Services} = Fetch()

  return (
    <Carousel className="max-w-6xl  m-auto mb-17 border-y max-sm:w-xs">
      <CarouselContent>
        {Services && Services.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3  p-0 max-sm:basis-full relative">
            <div >
              <Card className="h-full">
                <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                    <Image src={item.image} alt="Upload Image"  fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
              </Card>
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h1
                  className="max-w-[90%] sm:max-w-[70%] md:max-w-[60%]
                            text-base sm:text-lg md:text-xl lg:text-2xl
                            px-4 py-2 sm:px-6 sm:py-3
                            rounded-full font-bold text-white text-center
                            bg-black/50">
                  {item.offer}
                </h1>
            </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
      <CarouselPrevious className="pointer-events-auto cursor-pointer relative left-0" />
      <CarouselNext className="pointer-events-auto cursor-pointer relative right-0" />
    </div>
    </Carousel>
  )
}
