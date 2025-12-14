import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDashboardPath = (roles: string[] | undefined): string => {
    if (!roles) {
        return '/';
    }
    if (roles.includes('ROLE_ADMIN')) {
        return '/admin/dashboard';
    }
    if (roles.includes('ROLE_USER')) { 
        return '/user/dashboard';
    }
    return '/'; 
};