interface TitleProps {
  data: {
    title: string;
    subtitle: string;
    className?: string;
  };
}

export const Title = ({ data }: TitleProps) => {
  return (
    <div className={`mt-3 ${data.className}`}>
      <h2 className="text-3xl font-bold tracking-tight">{data.title}</h2>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        {data.subtitle}
      </p>
    </div>
  );
};
