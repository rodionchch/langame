import * as s from "./styles";

import avatar from "assets/images/avatar.png";

type ProfileProps = {
  firstName: string;
  lastName: string;
  middleName: string;
};

const Profile: React.FC<ProfileProps> = ({
  firstName,
  lastName,
  middleName,
}) => {
  return (
    <s.Profile>
      <s.ProfileImage src={avatar} />
      <s.ProfileName>{`${firstName} ${lastName} ${middleName}`}</s.ProfileName>
    </s.Profile>
  );
};

export default Profile;
