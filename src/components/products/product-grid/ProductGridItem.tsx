"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

import { Product } from "@/interfaces";
import Link from "next/link";
import Img from "next/image";

interface ProductGridProps {
  products: Product;
}

export const ProductGridItem = ({ products }: ProductGridProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleMouseEnter = () => {
    if (products.images.length > 1) {
      setImageIndex(1); // Cambia a la segunda imagen cuando el ratón entra
    }
  };

  const handleMouseLeave = () => {
    setImageIndex(0); // Cambia a la primera imagen cuando el ratón sale
  };
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-grow">
        <Img
          alt={products.title}
          className="object-cover w-full h-full rounded"
          height="300"
          src={`/products/${products.images[imageIndex]}`}
          width="400"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <CardTitle className="mt-2">{products.title}</CardTitle>
        <CardDescription className="mt-2"></CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="text-2xl">${products.price}</p>
      </CardContent>
      <CardFooter className="flex justify-end items-center mt-2">
        <p className="bg-orange-600 text-white text-center text-xl w-32 h-10 rounded-2xl flex items-center justify-center">
          <Link href={`/product/${products.slug}`}>ver detalle</Link>
        </p>
      </CardFooter>
    </Card>
  );
};
