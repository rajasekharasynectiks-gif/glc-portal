import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const AUTH_STORAGE_KEY = "glc-portal-auth-user";

export type AuthUser = {
  email: string;
};

type LoginParams = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type AuthContextValue = {
  user: AuthUser | null;
  initializing: boolean;
  login: (params: LoginParams) => Promise<void>;
  logout: () => void;
};

async function fetchJson<T = unknown>(url: string, init: RequestInit): Promise<T> {
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init.headers as Record<string, string> | undefined),
    },
    ...init,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error((data as any)?.message || response.statusText || "Request failed");
  }

  return data as T;
}

export async function loginWithEmailPassword(params: LoginParams): Promise<AuthUser> {
  const baseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() || "";

  if (baseUrl) {
    const url = `${baseUrl.replace(/\/$/, "")}/auth/login`;
    const result = await fetchJson<{ email?: string }>(url, {
      method: "POST",
      body: JSON.stringify({ email: params.email, password: params.password, rememberMe: params.rememberMe }),
    });

    return { email: result.email ?? params.email };
  }

  await new Promise((resolve) => setTimeout(resolve, 450));

  if (!params.email || !params.password) {
    throw new Error("Please enter your email address and password.");
  }

  if (params.password.length < 8) {
    throw new Error("Invalid email or password.");
  }

  return { email: params.email };
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const json = localStorage.getItem(AUTH_STORAGE_KEY);
    if (json) {
      try {
        setUser(JSON.parse(json));
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
    setInitializing(false);
  }, []);

  const login = useCallback(async (params: LoginParams) => {
    const nextUser = await loginWithEmailPassword(params);
    setUser(nextUser);

    if (params.rememberMe) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({ user, initializing, login, logout }),
    [user, initializing, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
