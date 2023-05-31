import clsx from "clsx";

const GlassPane = ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border-solid border-2 border-gray-200 glass",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
