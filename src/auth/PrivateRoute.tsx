import React from "react";
import { useAuth } from "./AuthContext";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return user ? (
    children
  ) : (
    <>
      <p> Acces refused. Login first.</p>
    </>
  );
}
