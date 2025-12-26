"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectToDashboard = (roles: string[]) => {
    if (roles.includes("ROLE_ADMIN")) router.push("/admin/dashboard");
    else if (roles.includes("ROLE_USER")) router.push("/user/dashboard");
    else router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const user = await login(email, password);
      if (user) {
        toast.success("Login successful!");
        redirectToDashboard(user.roles);
      } else {
        setError("Invalid login attempt.");
        toast.error("Invalid login attempt.");
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.errors?.[0] ||
        err.response?.data?.message ||
        "Invalid email or password.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 px-4 py-16">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative p-10 rounded-3xl bg-gray-900/80 backdrop-blur-xl border border-gray-800 shadow-2xl space-y-6"
        >
          {/* Header */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 leading-snug"
            >
              Silver Tsunami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 mt-2 text-sm md:text-base"
            >
              Enter your credentials to continue
            </motion.p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && <p className="text-red-500 text-center">{error}</p>}

<LabelInputContainer>
  <Label htmlFor="email" className="text-gray-300">
    Email Address
  </Label>
  <motion.div whileFocus={{ scale: 1.01 }} className="relative">
    <Input
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      placeholder="you@company.com"
      type="email"
      className="bg-gray-950 text-white border border-blue-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-3xl px-4 py-3 shadow-[0_5px_15px_rgba(59,130,246,0.3)] transition-all duration-300 w-full"
    />
  </motion.div>
</LabelInputContainer>

<LabelInputContainer>
  <Label htmlFor="password" className="text-gray-300">
    Password
  </Label>
  <motion.div whileFocus={{ scale: 1.01 }} className="relative">
    <Input
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      type="password"
      placeholder="••••••••"
      className="bg-gray-950 text-white border border-blue-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-3xl px-4 py-3 shadow-[0_5px_15px_rgba(59,130,246,0.3)] transition-all duration-300 w-full"
    />
  </motion.div>
</LabelInputContainer>


            <div className="flex justify-end">
              <a
                href="/forgot-password"
                className="text-sm text-gray-400 hover:text-white hover:underline transition"
              >
                Forgot password?
              </a>
            </div>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-6 flex justify-center"
>
  <motion.button
    type="submit"
    whileHover={{ y: -4, scale: 1.03, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
    whileTap={{ y: 2, scale: 0.97, boxShadow: "0 5px 15px rgba(255,255,255,0.1)" }}
    className="px-8 py-4 bg-gray-900 border border-gray-700 rounded-3xl shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer flex items-center justify-center w-full md:w-auto"
    disabled={isSubmitting}
  >
    <span className="text-teal-400 font-semibold text-lg md:text-xl">
      {isSubmitting ? "Logging in..." : "Login"}
    </span>
  </motion.button>
</motion.div>

          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <span className="grow h-px bg-gray-700"></span>
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <span className="grow h-px bg-gray-700"></span>
          </div>

          {/* Signup */}
          <p className="text-center text-gray-400 text-sm">
            Don't have an account?{" "}
            <a
              href="/#signup"
              className="text-cyan-400 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
