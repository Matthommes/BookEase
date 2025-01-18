"use client";

import { createContext, useContext, useState, useMemo } from "react";
import axios from 'axios';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const verify = async (token) => {
    const controller = new AbortController();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify?token=${token}`,
        { withCredentials: true, signal: controller.signal }
      );

      if (response.status === 200 || response.status === 201) {
        router.push("/verify");
      } else {
        throw new Error("An unexpected error occurred.");
      }

      const data = await response.json();
      setUser(data.user); // Save user data
    } catch (error) {
      if (error.name !== "AbortError") {
        setUser(null);
        throw error;
      }
    }
  };

  // Memoize context value
  const value = useMemo(() => ({ user, verify }), [user, verify]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
