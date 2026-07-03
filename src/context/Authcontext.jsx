import { createContext, useEffect, useState } from "react";
import apiClient from "../api";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //check if user is logged in when component mounts
  useEffect(() => {
    userStatus();
  }, []);
  async function userStatus() {
    let token = localStorage.getItem("accessToken");
    try {
      let response = await apiClient.get("api/v1/auth/me");
      console.log("userStaus", response);
      console.log(response.data.data.user);
      setUser(response.data.data.user);
    } catch (error) {
      localStorage.removeItem("accessToken");
      console.log(error);
      setUser(null);
    }
  }
  const value = {
    user: user,
    setUser: setUser,
    userStatus: userStatus,
    isAuthenticated: !!user,
    //it is short form of if else(if authenticated true else false)
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
