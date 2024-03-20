import { useState, useEffect, createContext } from "react";

const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
  //set the initial state
  const [profile, setProfile] = useState({});
  //fetch the profile data from API
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getData = async () => {
      const result = await fetch("https://dummyjson.com/users/1", { signal });
      const res = await result.json();
      setProfile(res);
    };
    getData();
    return () => controller.abort();
  }, []);
  return (
    <ProfileContext.Provider value={profile}>
      {/*higher order component */}
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
