import styled from "styled-components";
import { theme } from "constants/theme";

import iconArrow from "assets/icons/arrow.svg";

export const Gallery = styled.div`
  background: ${theme.card};
  border-radius: 16px;
  height: 332px;
  display: flex;
  flex-direction: column;
  flex: 1;
  user-select: none;
  overflow: hidden;
`;

export const GalleryButton = styled.button<{ prev?: boolean }>`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  z-index: 10000;
  border: 0;
  right: 21px;
  top: 33px;
  background: url(${iconArrow}) ${theme.white} 11px center no-repeat;
  box-shadow: 0px 3px 15px 0px #00000024;
  transform: rotate(180deg);
  transition: 200ms;
  ${(props) =>
    props.prev &&
    `
    right: 66px;
    transform: none;

  `}
  &:active {
    opacity: 0.8;
  }
`;
