import * as s from "./styles";

const DashboardTariffs = () => {
  return (
    <s.DashboardTariffs>
      <s.DashboardTariffsTitle>
        Тарифы, доступные на данном ПК
      </s.DashboardTariffsTitle>

      <s.DashboardTariffsItem>
        <s.DashboardTariffsItemLabel>Часовой тариф</s.DashboardTariffsItemLabel>
        <s.DashboardTariffsItemValue>100 ₽</s.DashboardTariffsItemValue>
      </s.DashboardTariffsItem>

      <s.DashboardTariffsItem>
        <s.DashboardTariffsItemLabel>
          Пакет на 3 часа
        </s.DashboardTariffsItemLabel>
        <s.DashboardTariffsItemValue>270 ₽</s.DashboardTariffsItemValue>
      </s.DashboardTariffsItem>

      <s.DashboardTariffsItem>
        <s.DashboardTariffsItemLabel>
          Пакет на 5 часов
        </s.DashboardTariffsItemLabel>
        <s.DashboardTariffsItemValue>400 ₽</s.DashboardTariffsItemValue>
      </s.DashboardTariffsItem>

      <s.DashboardTariffsItem>
        <s.DashboardTariffsItemLabel>
          Пакет “День” (9:00 - 16:00)
        </s.DashboardTariffsItemLabel>
        <s.DashboardTariffsItemValue>450 ₽</s.DashboardTariffsItemValue>
      </s.DashboardTariffsItem>

      <s.DashboardTariffsItem>
        <s.DashboardTariffsItemLabel>
          Пакет ”Вечер” (16:00 - 22:00)
        </s.DashboardTariffsItemLabel>
        <s.DashboardTariffsItemValue>450 ₽</s.DashboardTariffsItemValue>
      </s.DashboardTariffsItem>

      <s.DashboardTariffsItem>
        <s.DashboardTariffsItemLabel>
          Пакет “Сутки” 24 часа{" "}
        </s.DashboardTariffsItemLabel>
        <s.DashboardTariffsItemValue>1450 ₽</s.DashboardTariffsItemValue>
      </s.DashboardTariffsItem>
    </s.DashboardTariffs>
  );
};

export default DashboardTariffs;
