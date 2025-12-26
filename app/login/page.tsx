// app/login/page.tsx
"use client";
import React from "react";
import LoginPage from "@/components/sections/Login";
import { Navbar } from "@/components/sections/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-950">
        <LoginPage />
      </div>
    </>
  );
}
