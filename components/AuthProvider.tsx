"use client";

import React, { createContext, useContext } from "react";
import type { RykerSession } from "@/lib/auth";

interface AuthContextType {
    session: RykerSession | null;
    isLoaded: boolean;
}

const AuthContext = createContext<AuthContextType>({ session: null, isLoaded: false });

export function AuthProvider({ session, children }: { session: RykerSession | null, children: React.ReactNode }) {
    return (
        <AuthContext.Provider value={{ session, isLoaded: true }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useRykerSession() {
    return useContext(AuthContext);
}
