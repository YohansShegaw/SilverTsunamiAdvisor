"use client"; // This is now the Client Component

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

// --- All validation logic and helper components are moved here ---
const passwordValidation = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

const resetPasswordSchema = z.object({
  newPassword: z.string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(passwordValidation, {
        message: "Requires an uppercase letter, a number, and a special character.",
      }),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type FormValues = z.infer<typeof resetPasswordSchema>;

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

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
        <li key={index} className={`flex items-center transition-colors ${ check.regex.test(password) ? "text-green-500" : "text-neutral-400"}`}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {check.label}
        </li>
      ))}
    </ul>
  );
};

// --- THIS IS THE EXPORTED CLIENT COMPONENT ---
export default function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormValues>({
        resolver: zodResolver(resetPasswordSchema),
    });
    
    const newPasswordValue = watch("newPassword");
    
    useEffect(() => {
        if (!token) {
            toast.error("Invalid or missing password reset token.");
            router.push('/forgot-password');
        }
    }, [token, router]);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const payload = { token, newPassword: data.newPassword };
        const promise = api.post("/api/auth/reset-password", payload);
        
        toast.promise(promise, {
            loading: "Resetting password...",
            success: (res) => {
                router.push('/#login');
                return res.data.message || "Password has been reset successfully.";
            },
            error: (err) => err.response?.data?.errors?.[0] || "Failed to reset password. The link may have expired.",
        });
    };
    
    // While the useEffect is running to check the token, don't render the form
    if (!token) {
        return <p className="text-center text-neutral-400">Validating token...</p>;
    }

    return (
        <div className="max-w-md w-full mx-auto p-8 shadow-input bg-black rounded-2xl border border-neutral-800">
            <h2 className="font-bold text-3xl text-white text-center">Reset Your Password</h2>
            <p className="text-neutral-400 text-sm mt-2 text-center mx-auto">
                Enter your new password below.
            </p>
            <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" {...register("newPassword")} type="password" placeholder="••••••••" />
                    {errors.newPassword ? (
                        <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
                    ) : (
                        <PasswordStrengthIndicator password={newPasswordValue} />
                    )}
                </LabelInputContainer>

                 <LabelInputContainer>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" {...register("confirmPassword")} type="password" placeholder="••••••••" />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </LabelInputContainer>
                
                <Button type="submit" disabled={isSubmitting} className="w-full mt-6">
                    {isSubmitting ? "Saving..." : "Reset Password"}
                </Button>
            </form>
        </div>
    );
}