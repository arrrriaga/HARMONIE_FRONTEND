import { useContext, useEffect } from "react";
import { UserContext } from "../context/User.context";

const LogoutPage = () => {
  const { clearContext } = useContext(UserContext);
  useEffect(() => {
    clearContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default LogoutPage;
