import { useEffect, useState } from "react";

export function isAdminSession() {
  if (!localStorage.getItem("token")) return false;

  try {
    return JSON.parse(localStorage.getItem("user") || "null")?.role === "admin";
  } catch {
    return false;
  }
}

export default function AdminOnly({ children }) {
  const [allowed, setAllowed] = useState(isAdminSession);

  useEffect(() => {
    const refresh = () => setAllowed(isAdminSession());
    window.addEventListener("auth-change", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("auth-change", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return allowed ? children : null;
}
