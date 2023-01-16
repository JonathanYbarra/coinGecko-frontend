import "./card.scss";

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
}
export const Card = ({ children, ...rest }: CardProps) => {
  return <div className="card" {...rest}>{children}</div>;
};
