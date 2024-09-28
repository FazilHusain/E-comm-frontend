import React, { createContext, useEffect, useState } from "react";
import ProductAPI from "./api/ProductAPI";
import axios from "axios";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async() => {
    try {
      const res = await axios.get("/user/refresh_token");
      
      console.log(res);
    
      // Assuming the response structure includes the access token
      setToken(res.data.accesstoken);
    } catch (error) {
      if (error.response) {
        console.error("Error refreshing token:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Axios error:", error.message);
      }
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
