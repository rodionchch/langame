import Container from "components/Container";
import Sidebar from "components/Sidebar";
import Router from "./Routes";
import Wrapper from "components/Wrapper";
import { useMediaQuery } from "hooks/useMediaQuery";
import { device } from "constants/styles";
import Nav from "components/Nav";

import "./index.css";

function App() {
  const isMobile = useMediaQuery(device.lg);

  return (
    <Wrapper>
      <Container>
        {!isMobile ? <Sidebar /> : <Nav />}
        <Router />
      </Container>
    </Wrapper>
  );
}

export default App;
