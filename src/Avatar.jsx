import { useContext } from "react";
import { UserContext } from "./UserContext";
export const Avatar = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Avatar:-</h1>
      <p>I needed useContext for getting the name of the user:- {user.name}</p>
    </div>
  );
};
