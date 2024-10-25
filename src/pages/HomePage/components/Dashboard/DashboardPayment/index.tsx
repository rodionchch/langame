import * as s from "./styles";
import Button from "components/Button";

const DashboardPayment = () => {
  return (
    <s.DashboardPayment>
      <s.DashboardPaymentHeader>
        <s.DashboardPaymentTitle>Основной счет</s.DashboardPaymentTitle>
        <s.DashboardPaymentRefresh />
      </s.DashboardPaymentHeader>
      <s.DashboardPaymentContent>
        <s.DashboardPaymentPrice>
          15 000 <span>₽</span>
        </s.DashboardPaymentPrice>
        <s.DashboardPaymentBonus>
          <s.DashboardPaymentBonusSum>1 200 ₽</s.DashboardPaymentBonusSum>
          <s.DashboardPaymentBonusText>
            Бонусный счет
          </s.DashboardPaymentBonusText>
        </s.DashboardPaymentBonus>
      </s.DashboardPaymentContent>
      <Button>Пополнить</Button>
    </s.DashboardPayment>
  );
};

export default DashboardPayment;
