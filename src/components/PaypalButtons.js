import { useEffect, useContext } from "react";
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import { ProductContext } from "../context/Product.context";
import { guardarVenta } from "../services/venta";

const PaypalButtons = ({ currency, amount, productos }) => {
  const style = { layout: "vertical" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { limpiarCarrito } = useContext(ProductContext);

  const ventaHandler = async () => {
    const infoPedido = {
      total: amount,
      productos: productos.map((producto) => producto._id),
    };
    console.log(infoPedido);
    await guardarVenta(infoPedido);
    limpiarCarrito();
  };

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <>
      {isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              console.log("orderId:", orderId);
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          // Petición para guardar los datos de la compra y limpiar el carrito
          // Stripe
          return actions.order.capture().then(function () {
            ventaHandler();
          });
        }}
      />
    </>
  );
};

export default PaypalButtons;
