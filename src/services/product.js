import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/product`;

export const verProductos = async () => {
  try {
    const { data } = await axios.get(`${path}/getAll`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};

export const nuevoProducto = async (pelicula) => {
  try {
    const { data } = await axios.post(path, pelicula, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};

export const verMisProductos = async () => {
  try {
    const { data } = await axios.get(`${path}/misProductos`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (e) {
    return { error: "No has creado ningún producto desde tu perfil" };
  }
};
