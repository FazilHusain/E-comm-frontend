import React, { createContext, useEffect, useState } from "react";
import ProductAPI from "./api/ProductAPI";
import axios from "axios";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async() => {
    try {
      const res = await axios.get("https://e-comm-backend-6.onrender.com/user/refresh_token", {
        withCredentials: true,  // Include cookies with the request
      });
      
      // Assuming the response structure includes the access token
      setToken(res.data.accesstoken);
    } catch (error) {
      console.error("Error refreshing token:", error);
      // You can handle the error further (e.g., redirecting to login)
    }
  }
  
  useEffect(() => {
     const firstLogin = localStorage.getItem('firstLogin');
     if(firstLogin) refreshToken();
  },[])

const state = {
    token: [token,setToken],
    productAPI: ProductAPI(),
    userAPI: UserAPI(token)
}
  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  );
};
