import * as s from "./styles";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <s.Container>{children}</s.Container>;
};

export default Container;
