import { Meta, Story } from "@storybook/react";
import { Props, UserChip } from "./UserChip";
import { userFactory } from "./factories/user";

const user = userFactory.build();

export default {
  title: "UserChip",
  component: UserChip,
  parameters: {
    layout: "centered",
  },
  args: {
    user,
  },
} as Meta<Props>;

export const basic: Story<Props> = (props) => <UserChip {...props} />;
