import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserChip } from "./UserChip";
import { userFactory } from "./factories/user";

describe("UserChip", () => {
  it("displays the user's name", () => {
    const user = userFactory.build();

    render(<UserChip user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  describe("on hover", () => {
    it("displays the user's status", async () => {
      const user = userFactory.build();

      render(<UserChip user={user} />);
      const chip = screen.getByTestId("chip:user");
      userEvent.hover(chip);
      const tooltip = await screen.findByRole("tooltip");

      expect(tooltip).toHaveTextContent(user.status);
    });
  });
});
