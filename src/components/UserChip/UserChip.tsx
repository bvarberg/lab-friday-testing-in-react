import { Avatar, Chip, Tooltip } from "@material-ui/core";
import { User } from "./types";

export interface Props {
  user: User;
}

export function UserChip({ user }: Props) {
  return (
    <Tooltip arrow title={user.status}>
      <Chip
        avatar={<Avatar>{user.name.charAt(0)}</Avatar>}
        data-testid="chip:user"
        label={user.name}
      />
    </Tooltip>
  );
}
