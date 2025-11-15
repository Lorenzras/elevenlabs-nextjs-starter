export const Logo = ({
  className,
  width,
  height,
}: {
  className: string;
  width?: number;
  height?: number;
}) => (
  <span className={className} style={{ width, height }}>採用委員会</span>
);
