import { Navbar } from "@/components/sections/Navbar";
import { Suspense } from 'react'; 
import ResetPasswordForm from "./reset-password-form";

const LoadingForm = () => {
    return (
        <div className="max-w-md w-full mx-auto p-8">
            <p className="text-center text-white">Loading Form...</p>
        </div>
    );
};

export default function ResetPasswordPage() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20 flex items-center justify-center">
                <Suspense fallback={<LoadingForm />}>
                    <ResetPasswordForm />
                </Suspense>
            </main>
        </div>
    );
}