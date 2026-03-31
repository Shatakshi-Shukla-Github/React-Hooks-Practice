import { useContext } from "react";
import { UserContext } from "./UserContext";
export const Avatar = () => {
  const { user, setUser } = useContext(UserContext);
  const toggleProfession = () => {
    setUser({
      ...user,
      profession: user.profession === "President" ? "Role Model" : "President",
    });
  };
  return (
    <div>
      <h1>Avatar:-</h1>
      <p>
        I needed useContext for getting the name of the user:- {user.profession}
      </p>
      <button onClick={toggleProfession}>Toggle Profession</button>
    </div>
  );
};
