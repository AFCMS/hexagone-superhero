import { useNavigate } from "react-router";

export default function Unknown404() {
  const navigate = useNavigate();

  setTimeout(() => navigate("/"), 3000);

  return <span>404</span>;
}
