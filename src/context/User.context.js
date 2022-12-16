import { createContext, useEffect, useState } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(undefined);
  const [userId, setUserId] = useState(undefined);
  const [tipo, setTipo] = useState(undefined);

  const saveToken = (token) => setToken(token);
  const saveUserId = (userId) => setUserId(userId);
  const saveTipo = (tipo) => setTipo(tipo);

  const clearContext = () => {
    setToken(null);
    setUserId(null);
    setTipo(null);
    localStorage.clear();
    console.log("Sesión cerrada");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tipo = localStorage.getItem("tipo");
    if (token) {
      saveToken(token);
      saveUserId(userId);
      saveTipo(tipo);
    } else {
      saveToken(null);
    }
  }, []);
  return (
    <Provider
      value={{
        token,
        userId,
        tipo,
        saveToken,
        saveUserId,
        saveTipo,
        clearContext,
      }}
    >
      {children}
    </Provider>
  );
};

export { UserProvider, UserContext };
