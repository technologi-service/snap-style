import { SizeSelector, TabsDetalle } from "@/components";

import { Button } from "@/components/ui/button";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { QuantitySelector } from "@/components";
import { SliderShow } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}
export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) {
    return notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-1 w-full h-full px-2">
        <SliderShow images={product.images} title={product.title} />
      </div>

      <div className="md:col-span-1 px-5">
        <h1 className={`antialiased font-bold text-2xl mb-3`}>
          {product.title}
        </h1>

        <div className="grid gap-2 mb-3">
          <div className=" text-3xl font-bold">${product.price}</div>
        </div>
        <div className="mt-4">
          <SizeSelector
            selectedSize={product.sizes[1]}
            availableSizes={product.sizes}
          />
        </div>

        <div className="mt-5">
          <QuantitySelector initialQuantity={1} />
        </div>

        <Button size="lg" className="my-3">
          Add to cart
        </Button>

        <div className="grid gap-2">
          <TabsDetalle description={product.description} />
        </div>
      </div>
    </div>
  );
}
