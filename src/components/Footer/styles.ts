import styled from "styled-components";
import { device } from "constants/styles";

import copyright from "assets/images/copyright.svg";

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 0 45px;
  display: flex;
  justify-content: flex-end;

  @media ${device.md} {
    padding-right: 20px;
  }
`;

export const FooterCopyright = styled.div`
  width: 246px;
  height: 24px;
  background: url(${copyright}) center no-repeat;
`;
