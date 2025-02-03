import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Logout from "../pages/Logout/Logout";
import Unknown404 from "../pages/404/404";
import Superhero from "../pages/Superhero/Superhero";
import Superheros from "../pages/Superheros/Superheros";

export default function Router() {
  return (
    <main className="mb-auto flex flex-col">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/superhero" element={<Superheros />} />
        <Route path="/superhero/:id" element={<Superhero />} />
        <Route path="*" element={<Unknown404 />} />
      </Routes>
    </main>
  );
}
