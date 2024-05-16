import { notFound } from "next/navigation";

interface PageNotFounderProps {
  params: {
    id: string;
  };
}

export default function PageNotFounder({ params }: PageNotFounderProps) {
  const { id } = params;

  if (id === "men") {
    notFound();
  }

  return (
    <div>
      <h1>Category page {id}</h1>
    </div>
  );
}
