import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 px-3">
      {products.map((product) => (
        <ProductGridItem key={product.slug} products={product} />
      ))}
    </div>
  );
};
