import { theme } from "constants/theme";
import styled from "styled-components";

import logo from "assets/images/logo.svg";
import iconBurger from "assets/icons/menu.svg";
import iconClose from "assets/icons/close.svg";

export const Nav = styled.nav`
  height: 56px;
  background: ${theme.nav};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.a`
  height: 48px;
  width: 48px;
  display: block;
  cursor: pointer;
  background: url(${logo}) center no-repeat;
  background-size: 48px;
`;

export const NavBurger = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: url(${iconBurger}) center no-repeat;
  background-size: 28px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.white};
  z-index: 100000;
  display: flex;
  justify-content: center;
`;

export const MenuClose = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: url(${iconClose}) center no-repeat;
  background-size: 28px;
  position: absolute;
  right: 20px;
  top: 20px;
`;
