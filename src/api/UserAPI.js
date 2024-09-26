import React, { useEffect, useState } from "react";
import axios from "axios";
const UserAPI = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("https://e-comm-backend-3-6r0t.onrender.com" + "/user/infor", {
            headers: { Authorization: token },
          });
          setIsLogged(true);

          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
        } catch (err) {
          //alert(err.response.data.msg)
        }
      };
      getUser();
    }
  }, [token]);

  const addCart = async (product) => {
    if (!isLogged) return alert("Please Login..!");

    const check = cart.every((item) => item.id !== product._id);

    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      alert("Product has already been added");
    }
  };

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addCart: addCart,
  };
};

export default UserAPI;
