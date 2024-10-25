import { theme } from "constants/theme";
import styled from "styled-components";

import logo from "assets/images/logo.svg";

export const Sidebar = styled.nav`
  width: 247px;
  flex: 1 0 247px;
  height: 100%;
  border-left: 1px solid ${theme.divider};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const SidebarLogo = styled.a`
  width: 100%;
  max-width: 247px;
  margin: 71px 0 43px;
  height: 62px;
  display: block;
  cursor: pointer;
  align-self: center;
  background: url(${logo}) center no-repeat;
`;

export const SidebarItem = styled.a<{ image?: string; last?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 85px 0 30px;
  border-top: 1px solid ${theme.divider};
  background: center 38px no-repeat;
  position: relative;
  ${(props) =>
    props.image &&
    `
    background-image: url(${props.image});
  `}
  ${(props) =>
    props.last &&
    `
    border-bottom: 1px solid ${theme.divider};
    &:before {
      content: '';
      display: block;
      width: 5px;
      height: 5px;
      background: #DC0000;
      position: absolute;
      right: 104px;
      top: 33px;
      border-radius: 50%;
    } 
  `}
`;

export const SidebarItemLabel = styled.span`
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;
