import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import NavComponent from "./components/Nav";
import FooterComponent from "./components/FooterComponent";
import { useContext } from "react";
import { UserContext } from "./context/User.context";
import { clienteRoutes, adminRoutes, publicRoutes } from "./routes";

function App() {
  const { tipo, token } = useContext(UserContext);
  return (
    //No funciona
    <>
      <NavComponent />
      <main>
        <Container>
          <Routes>
            {(token
              ? tipo === "admin"
                ? adminRoutes
                : clienteRoutes
              : publicRoutes
            ).map((route, index) => (
              <Route key={index} {...route} />
            ))}
            {token !== undefined && (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </Container>
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
