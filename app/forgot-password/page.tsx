"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { toast } from "sonner";
import { Navbar } from "@/components/sections/Navbar";


const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
type FormValues = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const promise = api.post("/api/auth/forgot-password", data);
        toast.promise(promise, {
            loading: "Sending request...",
            success: (res) => {
                reset();
                return res.data.message;
            },
            error: "An error occurred. Please try again.",
        });
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20 flex items-center justify-center">
                <div className="max-w-md w-full mx-auto p-8">
                    <h2 className="font-bold text-3xl text-white text-center">Forgot Password</h2>
                    <p className="text-neutral-400 text-sm max-w-sm mt-2 text-center mx-auto">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>
                    <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" {...register("email")} placeholder="you@example.com" type="email" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full mt-6">
                            {isSubmitting ? "Sending..." : "Send Reset Link"}
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}