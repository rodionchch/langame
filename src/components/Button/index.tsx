import * as s from "./styles";

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <s.Button>{children}</s.Button>;
};

export default Button;
