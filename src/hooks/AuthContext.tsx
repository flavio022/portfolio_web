import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/apiClient";

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  singIn(credentials: SignInCredentials): Promise<void>;
  singOut(): void;
  updateUser(user: User): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Portfolio:token");
    const user = localStorage.getItem("@Portfolio:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post("session", {
      email,
      password
    });
    const { token, user } = response.data;
    localStorage.setItem("@Portfolio:token", token);
    localStorage.setItem("@Portfolio:user", JSON.stringify(user));
    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);
  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@Portfolio:user", JSON.stringify(user));

      setData({
        token: data.token,
        user
      });
    },
    [setData, data.token]
  );
  const singOut = useCallback(() => {
    localStorage.removeItem("@Portfolio:token");
    localStorage.removeItem("@Portfolio:user");
    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider
      value={{ user: data.user, singIn, singOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function UserAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("use Auth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, UserAuth };
