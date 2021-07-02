import { Factory } from "fishery";
import { User } from "../types";

export const userFactory = Factory.define<User>(({ sequence }) => ({
  id: String(sequence),
  name: "Test User",
  status: "offline",
}));
