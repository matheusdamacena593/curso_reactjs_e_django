import { UserAge } from "./UserAge";
import { UserAvatar } from "./UserAvatar";
import { UserEmail } from "./UserEmail";
import { UserName } from "./UserName";
import { UserRoles } from "./UserRoles";
import logo from "../assets/react.svg";

type Props = {
  name: string,
  email: string,
  age: number
  avatar?: string
  roles: { id: number, title: string }[]
}

export const UserInfo = ({name, email, age, avatar = logo, roles}: Props) => {
  return (
    <>
      <UserAvatar src={avatar} />
      <UserName name={name} />
      <UserEmail email={email} />
      <UserAge age={age} />
      <UserRoles roles={roles} />
    </>
  );
};
