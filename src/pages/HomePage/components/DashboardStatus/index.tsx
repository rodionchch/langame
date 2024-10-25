import * as s from "./styles";

const DashboardStatus = () => {
  return (
    <s.DashboardStatus>
      <s.DashboardStatusItem>
        <s.DashboardStatusItemLabel>Текущий статус:</s.DashboardStatusItemLabel>
        <s.DashboardStatusItemValue>Standart</s.DashboardStatusItemValue>
      </s.DashboardStatusItem>
      <s.DashboardStatusItem>
        <s.DashboardStatusItemLabel>
          До смены статуса осталось:
        </s.DashboardStatusItemLabel>
        <s.DashboardStatusItemValue>
          10 часов 23 минуты
        </s.DashboardStatusItemValue>
      </s.DashboardStatusItem>
    </s.DashboardStatus>
  );
};

export default DashboardStatus;
