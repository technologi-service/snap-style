"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const SliderShow = ({ images, title, className }: Props) => {
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));

  return (
    <div className="h-full w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-auto h-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-full">
          {images.map((imagen) => (
            <CarouselItem key={imagen}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Image
                      src={`/products/${imagen}`}
                      alt={title}
                      width={1500}
                      height={1500}
                      className="object-fill  md:w-3/4 md:h-3/4 lg:w-5/6 lg:h-5/6"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-1 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-3 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};
