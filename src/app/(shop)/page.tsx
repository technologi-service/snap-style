import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const product = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        data={{
          title: "Tienda",
          subtitle: "todo los productos",
          className: "mt-3",
        }}
      />

      <ProductGrid products={product} />
    </>
  );
}
