import { useEffect } from "react";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, [logout, navigate]);

  return <></>;
}
