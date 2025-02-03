import { useState, useEffect } from "react";

import Cookies from "js-cookie";
import { AuthContext } from "./AuthContext";

interface DbUser {
  email: string;
  password: string;
}

function getUsers(): DbUser[] {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  }

  return [];
}

function setUsers(users: DbUser[]) {
  localStorage.setItem("users", JSON.stringify(users));
}

interface User {
  email: string;
}

export interface AuthContextType {
  user: User | null;
  /**
   * @throws Error
   */
  login: (email: string, password: string) => void;
  /**
   * @throws Error
   */
  register: (email: string, password: string) => void;
  logout: () => void;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    const users = getUsers();
    const existingUser = users.find((user) => user.email === email);

    if (!existingUser) {
      throw new Error("User with this email does not exist");
    }

    if (existingUser.password !== password) {
      throw new Error("Password is incorrect");
    }

    setUser({ email });
    Cookies.set("user", JSON.stringify({ email }), { expires: 1 });
  };

  const register = (email: string, password: string) => {
    const users = getUsers();
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const newUser = { email, password };
    users.push(newUser);
    setUsers(users);
    setUser({ email });

    Cookies.set("user", JSON.stringify({ email }), { expires: 1 });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
