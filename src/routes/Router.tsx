import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Logout from "../pages/Logout/Logout";
import Unknown404 from "../pages/404/404";
import Superhero from "../pages/Superhero/Superhero";
import Superheros from "../pages/Superheros/Superheros";
import Contact from "../pages/Contact/Contact";
import { PrivateRoute } from "../auth/PrivateRoute";

export default function Router() {
  return (
    <main className="mb-auto flex flex-col">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/superhero"
          element={
            <PrivateRoute>
              <Superheros />
            </PrivateRoute>
          }
        />
        <Route
          path="/superhero/:id"
          element={
            <PrivateRoute>
              <Superhero />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Unknown404 />} />
      </Routes>
    </main>
  );
}
