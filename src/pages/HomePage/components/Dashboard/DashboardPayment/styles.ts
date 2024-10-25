import styled from "styled-components";
import { theme } from "constants/theme";

import iconRefresh from "assets/icons/reflesh.svg";

export const DashboardPayment = styled.div`
  background: ${theme.card};
  padding: 31px 28px 29px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DashboardPaymentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DashboardPaymentTitle = styled.h3`
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 21px;
`;

export const DashboardPaymentRefresh = styled.button`
  width: 32px;
  height: 32px;
  margin-top: -8px;
  margin-right: -8px;
  cursor: pointer;
  border: 0;
  background: url(${iconRefresh}) transparent center no-repeat;
  border-radius: 50%;
  transition: 200ms;
  &:hover {
    background-color: ${theme.gray};
  }
  &:active {
    background-color: ${theme.gray};
    opacity: 0.7;
  }
`;

export const DashboardPaymentContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const DashboardPaymentPrice = styled.p`
  margin-right: 17px;
  font-size: 34px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 31px;
`;

export const DashboardPaymentBonus = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e8e8e8;
  border-radius: 11px;
  width: 102px;
  height: 51px;
  flex-direction: column;
  padding-left: 19px;
  margin-bottom: 31px;
`;

export const DashboardPaymentBonusSum = styled.p`
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
  text-align: left;
  margin-top: -4px;
`;

export const DashboardPaymentBonusText = styled.span`
  font-size: 11px;
  font-weight: 100;
  line-height: 12px;
  text-align: left;
`;
