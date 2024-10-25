import { theme } from "constants/theme";
import styled from "styled-components";

export const Button = styled.button`
  background: ${theme.accent};
  border: 0;
  height: 42px;
  border-radius: 64px;
  width: 100%;
  max-width: 488px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 900;
  line-height: 16.64px;
  color: ${theme.white};
  transition: 200ms;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
  }
`;
