import { useContext } from "react";
import ProfileContext from "./context/ProfileContext";

export const Navbar = () => {
  const context = useContext(ProfileContext);
  return <div>Welcome {context ? context.firstName : "User"}</div>;
};
