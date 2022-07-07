import { createContext } from "react";
import { useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "62c1d7806ab6226405874ca5",
    userName: "Harry",
    email: "harry@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: ["62c1d7956ab6226405874cab"],
    isAdmin: false,
    __v: 0,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>{children}</AuthContext.Provider>;
};
