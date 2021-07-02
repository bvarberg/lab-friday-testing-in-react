export type Status = "online" | "offline" | "away";

export interface User {
  id: string;
  name: string;
  status: Status;
}
