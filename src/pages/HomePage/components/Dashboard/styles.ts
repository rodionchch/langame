import { device } from "constants/styles";
import { theme } from "constants/theme";
import styled from "styled-components";

export const Dashboard = styled.div`
  background: ${theme.background};
  width: 100%;
  border-radius: 36px;
  padding: 50px 66px 0 0;
  overflow: hidden;

  @media ${device.xl} {
    padding-top: 20px;
  }

  @media ${device.md} {
    padding: 0;
  }
`;

export const DashboardCards = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 17px;

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const DashboardInner = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;

  @media ${device.xl} {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.md} {
    flex-direction: column;
    display: block;
    padding: 20px;
    padding-bottom: 0;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  padding: 0 46px;
  width: 100%;
  margin-bottom: 25px;

  @media ${device.xl} {
    padding: 0;
  }

  @media ${device.xl} {
    padding-right: 20px;
    display: block;
  }

  @media ${device.md} {
    padding-right: 0;
  }
`;

export const DashboardProfile = styled.div`
  flex: 1 0 calc(50% - 32px);
  display: flex;
`;

export const DashboardStatus = styled(DashboardProfile)`
  margin-left: 32px;

  @media ${device.xl} {
    margin: 20px 0 0;
    flex: 1 0 100%;
    width: 100%;
  }
`;

export const DashboardInfo = styled(DashboardProfile)`
  width: 100%;
  margin-right: 32px;
`;

export const DashboardPayment = styled(DashboardInfo)`
  margin-right: 0;

  @media ${device.xl} {
    margin: 20px 0 0;
  }
`;

export const DashboardGallery = styled(DashboardProfile)`
  &:nth-child(1) {
    margin-right: 32px;

    @media ${device.xl} {
      margin: 0 0 20px;
    }
  }

  @media ${device.xl} {
    margin: 0;
  }
`;

export const DashboardSlider = styled.div`
  padding-left: 46px;
`;
