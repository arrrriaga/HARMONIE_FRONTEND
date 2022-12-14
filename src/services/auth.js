import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/auth`;

export const loginSignUp = async (serviceType, userInfo) => {
  try {
    const {
      data: {
        detalles: { token, userId },
      },
    } = await axios.post(`${path}/${serviceType}`, userInfo);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    return { token, userId };
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
