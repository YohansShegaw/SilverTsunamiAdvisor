// context/AuthContext.tsx
"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import api from "@/lib/api";

interface User {
  id: number;
  email: string;
  roles: string[];
}
interface RegisterData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  signup: (data: RegisterData) => Promise<User | null>;
  logout: () => void;
  isLoading: boolean;
  recheckAuthStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  const checkAuthStatus = useCallback(async () => {
    try {
      const response = await api.get("/api/user/me");
      if (response.status === 200 && response.data) {
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed, user is not logged in.");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const recheckAuthStatus = async () => {
    setIsLoading(true);
    await checkAuthStatus();
  };

  const logout = useCallback(async () => {
    try {
      await api.post("/api/auth/logout");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const handleAuthFailure = () => {
      console.log("Auth failure detected, logging out.");
      logout();
    };
    window.addEventListener("auth-failed", handleAuthFailure);
    return () => {
      window.removeEventListener("auth-failed", handleAuthFailure);
    };
  }, [logout]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const login = async (email: string, password: string): Promise<User> => {
    try {
      const response = await api.post("/api/auth/login", { email, password });
      
      const loggedInUser: User = response.data;

      if (!loggedInUser || !loggedInUser.roles) {
        throw new Error("Login response was successful but did not contain valid user data.");
      }

      setUser(loggedInUser);
      return loggedInUser;
    } catch (error) {
      setUser(null);
      console.error("Authentication error in AuthContext:", error);
      throw error;
    }
  };

  const signup = async (data: RegisterData): Promise<User | null> => {
    await api.post("/api/auth/register", data);
    return await login(data.email, data.password);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signup, logout, isLoading, recheckAuthStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};