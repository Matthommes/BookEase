"use client";
import { handleApiError } from "@/lib/apiError";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

const verify = async (token) => {
  const controller = new AbortController();
  try {
    const response = await fetch(
      `http://localhost:5000/api/auth/verify?token=${token}`,
      { method: "POST", signal: controller.signal }
    );

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    const data = await response.json();
    setUser(data.user);
  } catch (error) {
    if (error.name !== "AbortError") {
      setUser(null);
      throw error;
    }
  }
};


  return (
    <AuthContext.Provider value={{ user, verify }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
