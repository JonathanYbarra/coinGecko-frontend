import "./textField.scss";

type TextFieldProps = {
  placeholder?: string;
  className?: string;
  type?: string;
};

export const TextField = ({
  placeholder,
  className,
  type = "text",
}: TextFieldProps) => {
  return (
    <div className={`input-container ${className}`}>
      <i className="fa-solid fa-magnifying-glass icon"></i>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
