"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export function SzRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  if (typeof window !== "undefined") {
    var userData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData") || "{}")
      : null;
  }
  useEffect(() => {
    if (userData !== null && userData?.role === "sz") {
      toast.success("Access allowed for SZ");
      console.log("Allowed userData", userData);
      router.push(pathname === "/login" ? "/dashboard" : pathname);
    } else {
      toast.error("Unauthorized Routes, Access Denied");
      localStorage.removeItem("userData");
      router.push("/login");
    }
  }, [userData]);

  return <React.Fragment>{children}</React.Fragment>;
}
