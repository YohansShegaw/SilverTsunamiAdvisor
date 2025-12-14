"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useAnimation } from "framer-motion";

const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

const signupSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(passwordValidation, {
        message:
          "Password requires an uppercase letter, a number, and a special character.",
      }),
    confirmPassword: z.string(),
    phoneNumber: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

const PasswordStrengthIndicator = ({ password = "" }) => {
  const checks = [
    { regex: /.{8,}/, label: "At least 8 characters" },
    { regex: /[a-z]/, label: "One lowercase letter" },
    { regex: /[A-Z]/, label: "One uppercase letter" },
    { regex: /\d/, label: "One number" },
    { regex: /[@$!%*?&]/, label: "One special character" },
  ];

  return (
    <ul className="list-none space-y-1 text-xs mt-2 pl-1">
      {checks.map((check, index) => (
        <li
          key={index}
          className={`flex items-center transition-colors ${
            check.regex.test(password) ? "text-green-500" : "text-neutral-400"
          }`}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          {check.label}
        </li>
      ))}
    </ul>
  );
};

export function SignupForm() {
  const { signup } = useAuth();
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const passwordValue = watch("password");

  const redirectToDashboard = (roles: string[]) => {
    if (roles.includes("ROLE_ADMIN")) {
      router.push("/admin/dashboard");
    } else if (roles.includes("ROLE_USER")) {
      router.push("/user/dashboard");
    } else {
      router.push("/");
    }
  };

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    setServerError("");
    try {
      const user = await signup({ ...data });
      if (user) {
        redirectToDashboard(user.roles);
      }
    } catch (err: any) {
      console.error("API Error Body:", err.response?.data);

      const errorData = err.response?.data;

      if (
        typeof errorData === "object" &&
        errorData !== null &&
        "success" in errorData &&
        !errorData.success
      ) {
        const errorMessage =
          errorData.errors?.[0] ||
          errorData.message ||
          "An error occurred during sign up.";
        setServerError(errorMessage);
      } else if (typeof errorData === "string") {
        setServerError(errorData);
      } else {
        setServerError(
          "Could not connect to the server or an unknown error occurred."
        );
      }
    }
  };

  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <div
      id="signup"
      className="max-w-2xl w-full mx-auto rounded-2xl p-6 md:p-26 mt-24 shadow-lg bg-white dark:bg-black"
    >
      {/* Animated Modern Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="text-center mb-8"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-teal-400 via-cyan-400 to-blue-500 drop-shadow">
          Create Your Account
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-300 text-sm max-w-md mx-auto">
          Sign up to start your journey with us. No credit card required.
        </p>
      </motion.div>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        {serverError && (
          <p className="text-red-500 text-sm text-center mb-4">{serverError}</p>
        )}

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Yohans"
              type="text"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Shegaw"
              type="text"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="yohansshegaw1234@gmail.com"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password")}
          />
          {errors.password ? (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          ) : (
            <PasswordStrengthIndicator password={passwordValue} />
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
          <Input
            id="phoneNumber"
            placeholder="09XXXXXXXXX"
            type="tel"
            {...register("phoneNumber")}
          />
        </LabelInputContainer>

       <button
  className="
    bg-gray-900
    w-full text-white rounded-md h-10 font-medium
    shadow-[0_8px_15px_rgba(255,255,255,0.1)]
    hover:shadow-[0_12px_20px_rgba(255,255,255,0.2)]
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  "
  type="submit"
  disabled={isSubmitting}
>
  {isSubmitting ? "Signing Up..." : "Sign up →"}
</button>

      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
