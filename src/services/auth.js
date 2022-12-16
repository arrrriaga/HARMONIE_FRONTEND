import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/auth`;

export const loginSignUp = async (serviceType, userInfo) => {
  try {
    const {
      data: {
        detalles: { tipo, token, userId },
      },
    } = await axios.post(`${path}/${serviceType}`, userInfo);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("tipo", tipo);
    return { tipo, token, userId };
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
