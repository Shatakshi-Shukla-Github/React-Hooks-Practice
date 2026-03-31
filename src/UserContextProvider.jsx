import { useState } from "react";
import { UserContext } from "./UserContext";
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Abraham Lincoln",
    age: 22,
    profession: "President",
  });
  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};
