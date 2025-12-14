"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import api from "@/lib/api";

// --- THIS IS THE FIX ---
// We define the User type directly in this file, so no external import is needed.
// This type should match the fields from your backend's UserDto.
export type User = {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  roles: string[];
  enabled: boolean;
};
// --- END OF FIX ---

interface GetUserColumnsProps {
  onEdit: (user: User) => void;
  refetch: () => void;
}

const UserActions = ({ user, onEdit, refetch }: { user: User } & GetUserColumnsProps) => {
    const handleDelete = () => {
        toast.warning(`Are you sure you want to delete user ${user.email}?`, {
            action: {
                label: "Confirm Delete",
                onClick: async () => {
                    const promise = api.delete(`/api/admin/users/${user.id}`);
                    toast.promise(promise, {
                        loading: "Deleting user...",
                        success: () => { refetch(); return "User deleted successfully."; },
                        error: "Failed to delete user.",
                    });
                }
            },
            cancel: { label: "Cancel", onClick: () => {} }
        });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => onEdit(user)}>Edit User</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="focus:bg-destructive/80 text-red-500" onClick={handleDelete}>Delete User</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export const getUserColumns = ({ onEdit, refetch }: GetUserColumnsProps): ColumnDef<User>[] => [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "firstName", header: "First Name" },
    { 
        accessorKey: "roles", 
        header: "Roles", 
        cell: ({ row }) => (
            <div className="flex flex-wrap gap-1">
                {row.original.roles.map(role => 
                    <span key={role} className="px-2 py-1 text-xs rounded-full bg-neutral-800">{role.replace("ROLE_", "")}</span>
                )}
            </div>
        )
    },
    { 
        accessorKey: "enabled", 
        header: "Status", 
        cell: ({ row }) => (
            <span className={cn("font-semibold", row.original.enabled ? "text-green-400" : "text-red-400")}>
                {row.original.enabled ? "Active" : "Disabled"}
            </span>
        )
    },
    {
        id: "actions",
        cell: ({ row }) => <UserActions user={row.original} onEdit={onEdit} refetch={refetch} />,
    },
];