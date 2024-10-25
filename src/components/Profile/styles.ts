import styled from "styled-components";

import { theme } from "constants/theme";

export const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  background: ${theme.gray};
  width: 53px;
  height: 53px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const ProfileName = styled.span`
  font-size: 17px;
  font-weight: 700;
  line-height: 23px;
  font-family: Lato;
`;
