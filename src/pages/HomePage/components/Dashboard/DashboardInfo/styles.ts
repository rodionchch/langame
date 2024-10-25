import styled from "styled-components";
import { theme } from "constants/theme";

export const DashboardInfo = styled.div`
  background: ${theme.card};
  padding: 31px 28px 33px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DashboardInfoTitle = styled.h3`
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 48px;
`;

export const DashboardInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
`;

export const DashboardInfoItemLabel = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 24px;
  text-align: left;
`;

export const DashboardInfoItemValue = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  text-align: right;
`;
