interface TitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};
