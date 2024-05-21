"use client";

import { Button } from "@/components/ui/button";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity: number;
}

export const QuantitySelector = ({
  initialQuantity,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const onQuantityChange = (newQuantity: number) => {
    if (quantity + newQuantity < 1) return;
    setQuantity(quantity + newQuantity);
  };
  return (
    <div className="flex">
      <Button onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} className="text-black" />
      </Button>
      <span className="flex justify-center items-center w-20 mx-3 px-8 rounded-sm bg-gray-100 text-2xl text-black">
        {quantity}
      </span>
      <Button onClick={() => onQuantityChange(+1)}>
        <IoAddCircleOutline size={30} className="text-black" />
      </Button>
    </div>
  );
};
