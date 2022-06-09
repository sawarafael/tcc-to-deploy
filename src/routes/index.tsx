import { Route, Routes } from "react-router-dom";

import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";
import Home from "../pages/Home";
import ListagemProcessos from "../pages/Processos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/processos" element={<ListagemProcessos />} />
      <Route path="/detalhar/:id" element={<ListagemProcessos />} />
    </Routes>
  );
};

export default AppRoutes;
