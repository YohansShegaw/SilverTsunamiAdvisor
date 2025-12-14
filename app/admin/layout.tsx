// "use client";
// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { DashboardLayout } from "@/components/layout/DashboardLayout";
// import { Loader2 } from "lucide-react";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//     const { isAuthenticated, user, isLoading } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//         if (!isLoading && (!isAuthenticated || !user?.roles.includes("ROLE_ADMIN"))) {
//             router.push("/login"); 
//         }
//     }, [isAuthenticated, user, isLoading, router]);

//     if (isLoading || !isAuthenticated || !user?.roles.includes("ROLE_ADMIN")) {
//         return (
//             <div className="flex h-screen items-center justify-center bg-black">
//                 <Loader2 className="h-8 w-8 animate-spin text-white" />
//             </div>
//         );
//     }
    
//     return <DashboardLayout>{children}</DashboardLayout>;
// }