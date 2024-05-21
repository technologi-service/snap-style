import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const product = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title={"tienda"}
        subtitle={"productos para regalar"}
        className="mt-3"
      />

      <ProductGrid products={product} />
    </>
  );
}
