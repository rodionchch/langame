import { device } from "constants/styles";
import { theme } from "constants/theme";
import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  max-width: 100%;
  padding-bottom: 22px;

  @media ${device.xxl} {
    overflow-x: auto;
  }
`;

export const SliderItem = styled.div<{ color?: string; image?: string }>`
  width: 280px;
  flex: 1 0 280px;
  height: 148px;
  border-radius: 22px;
  transition: 300ms;
  cursor: pointer;
  background: ${theme.white};
  padding-top: 99px;
  box-shadow: 0px 4px 14px 0px #0000000a;
  margin-right: 40px;
  user-select: none;
  ${(props) =>
    props.image &&
    `
    background: url(${props.image}) center 34px no-repeat;
  `}
  ${(props) =>
    props.color &&
    `
  background-color: ${props.color};
  `}

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    opacity: 0.7;
  }
`;

export const SliderItemLabel = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
`;
