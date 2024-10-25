import * as s from "./styles";

const DashboardInfo = () => {
  return (
    <s.DashboardInfo>
      <s.DashboardInfoTitle>Информация о текущей сесcии</s.DashboardInfoTitle>
      <s.DashboardInfoItem>
        <s.DashboardInfoItemLabel>Осталось минут:</s.DashboardInfoItemLabel>
        <s.DashboardInfoItemValue>120 мин.</s.DashboardInfoItemValue>
      </s.DashboardInfoItem>
      <s.DashboardInfoItem>
        <s.DashboardInfoItemLabel>Сессия истекает:</s.DashboardInfoItemLabel>
        <s.DashboardInfoItemValue>14.12.2020, 20:24</s.DashboardInfoItemValue>
      </s.DashboardInfoItem>
    </s.DashboardInfo>
  );
};

export default DashboardInfo;
