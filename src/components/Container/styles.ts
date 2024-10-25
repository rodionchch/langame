import { device, size } from "constants/styles";
import styled from "styled-components";

export const Container = styled.div`
  max-width: ${size.xxl};
  width: 100%;
  min-height: 100%;
  display: flex;

  @media ${device.lg} {
    flex-direction: column;
  }
`;
