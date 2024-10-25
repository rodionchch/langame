import * as s from "./styles";

import iconTransaction from "assets/icons/transaction.svg";
import iconBook from "assets/icons/book.svg";
import iconSettings from "assets/icons/settings.svg";
import iconSupport from "assets/icons/support.svg";

const Sidebar = () => {
  return (
    <s.Sidebar>
      <s.SidebarLogo href="/#" />
      <s.SidebarItem image={iconTransaction}>
        <s.SidebarItemLabel>История транзакций</s.SidebarItemLabel>
      </s.SidebarItem>
      <s.SidebarItem image={iconBook}>
        <s.SidebarItemLabel>Забронировать</s.SidebarItemLabel>
      </s.SidebarItem>
      <s.SidebarItem image={iconSettings}>
        <s.SidebarItemLabel>Настройки</s.SidebarItemLabel>
      </s.SidebarItem>
      <s.SidebarItem image={iconSupport} last>
        <s.SidebarItemLabel>Поддержка</s.SidebarItemLabel>
      </s.SidebarItem>
    </s.Sidebar>
  );
};

export default Sidebar;
