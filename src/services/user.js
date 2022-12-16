import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/user`;

export const getMyData = async () => {
  try {
    const { data } = await axios.get(`${path}/getmydata`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
