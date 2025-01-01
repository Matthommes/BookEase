"use client";
import { handleApiError } from "@/lib/apiError";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

 const verify = async (token) => {
   try {
     const response = await fetch(
       `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify?token=${token}`,
       { method: "POST" }
     );

     if (!response.ok) {
       const data = await response.json();
       throw data; 
     }

     const data = await response.json(); 
     setUser(data.user); 
   } catch (error) {
     setUser(null); 
     throw error;
   }
 };


  return (
    <AuthContext.Provider value={{ user, verify }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function   useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
