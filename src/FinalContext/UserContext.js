import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {

  const [userLists, setUserLists] = useState( [])
  const [ loginStatus, setLoginStatus] = useState(false)
  return (
    <UserContext.Provider value={{ userLists, setUserLists, loginStatus, setLoginStatus}}>
      {props.children}
    </UserContext.Provider>
  );
};