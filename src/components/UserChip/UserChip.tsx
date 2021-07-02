import { Avatar, Chip, Tooltip } from "@material-ui/core";
import { User } from "./types";

export interface Props {
  user: User;
}

export function UserChip({ user }: Props) {
  const userInitial = user.name.charAt(0);

  return (
    <Tooltip title={<p>{user.status}</p>}>
      <Chip avatar={<Avatar>{userInitial}</Avatar>} label={user.name} />
    </Tooltip>
  );
}
