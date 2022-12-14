import { createContext, useEffect, useState } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(undefined);
  const [userId, setUserId] = useState(undefined);

  const saveToken = (token) => setToken(token);
  const saveUserId = (userId) => setUserId(userId);

  const clearContext = () => {
    setToken(null);
    setUserId(null);
    localStorage.clear();
    console.log("Sesión cerrada");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token) {
      saveToken(token);
      saveUserId(userId);
    } else {
      saveToken(null);
    }
  }, []);
  return (
    <Provider
      value={{
        token,
        userId,
        saveToken,
        saveUserId,
        clearContext,
      }}
    >
      {children}
    </Provider>
  );
};

export { UserProvider, UserContext };
