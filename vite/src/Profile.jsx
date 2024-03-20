import { useContext } from "react";
import ProfileContext from "./context/ProfileContext";

export const Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div>
      Name::
      {context &&
        Object.keys(context).length > 0 &&
        context?.firstName.concat("", context?.lastName)}
    </div>
  );
};
