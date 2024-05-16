import Link from "next/link";
import Img from "next/image";

export const PageNotFoundUi = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-6 px-4 md:px-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Oops! Page not found.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Img
        alt="404 Error"
        className="max-w-[300px] md:max-w-[400px]"
        height={400}
        src="/imgs/starman_750x750.png"
        style={{
          aspectRatio: "400/400",
          objectFit: "cover",
        }}
        width={400}
      />
      <Link
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
};
