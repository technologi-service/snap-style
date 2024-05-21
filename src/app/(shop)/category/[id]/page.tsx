import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function PageNotFounder({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);
  const labels: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "para todos",
  };

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle={""}
        className="
      mt-3"
      />

      <ProductGrid products={products} />
    </>
  );
}
