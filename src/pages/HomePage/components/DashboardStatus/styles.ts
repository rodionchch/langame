import styled from "styled-components";

import { theme } from "constants/theme";
import { device } from "constants/styles";

export const DashboardStatus = styled.div`
  background: ${theme.card};
  padding: 31px 28px 29px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DashboardStatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 13px;

  &:nth-child(1) {
    margin-bottom: 26px;
  }
`;

export const DashboardStatusItemLabel = styled.p`
  font-weight: 300;
  font-weight: 300;
  text-align: left;
`;

export const DashboardStatusItemValue = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  text-align: right;
`;
