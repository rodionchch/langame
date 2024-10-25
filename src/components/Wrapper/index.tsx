import * as s from "./styles";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <s.Wrapper>{children}</s.Wrapper>;
};

export default Wrapper;
