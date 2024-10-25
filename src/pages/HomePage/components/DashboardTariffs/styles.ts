import styled from "styled-components";
import { device } from "constants/styles";
import { theme } from "constants/theme";

export const DashboardTariffs = styled.div`
  width: 411px;
  flex: 1 0 411px;
  height: 100%;
  background: linear-gradient(
    162.3deg,
    #3d3d3d -12.88%,
    #434343 51.15%,
    #606060 108.84%
  );
  border-radius: 26px;
  padding: 35px 32px 35px 32px;
  height: 722px;

  @media ${device.lg} {
    width: auto !important;
  }

  @media ${device.xl} {
    width: 320px;
    flex: 1 0 320px;
  }

  @media ${device.md} {
    width: 100%;
    flex: 1 0 722px;
    align-self: stretch;
    margin-left: 20px;
    margin: 0 20px 20px;
  }
`;

export const DashboardTariffsTitle = styled.h3`
  text-transform: uppercase;
  color: ${theme.white};
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  padding-bottom: 37px;
  border-bottom: 1px solid #575757;
`;

export const DashboardTariffsItem = styled.div`
  padding: 31px 0 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.white};
  border-bottom: 1px solid #575757;
`;

export const DashboardTariffsItemLabel = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
`;

export const DashboardTariffsItemValue = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 13px;
  text-align: right;
`;
