// components/admin/columns.tsx
"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import api from "@/lib/api";

export type User = {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  roles: string[];
  enabled: boolean;
};

const UserActions = ({ user }: { user: User }) => {
    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete user ${user.email}?`)) {
            try {
                await api.delete(`/api/admin/delete-user/${user.id}`);
                toast.success("User deleted successfully.");
                window.location.reload();
            } catch (error) {
                console.error("Failed to delete user:", error);
                toast.error("Failed to delete user.");
            }
        }
    };

    const handleEdit = () => {
        toast.info(`Editing user: ${user.email}`);
    };

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.email)}>
            Copy Email
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleEdit}>Edit User</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500 hover:!text-red-500" onClick={handleDelete}>
            Delete User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "roles",
    header: "Roles",
    cell: ({ row }) => {
        const roles = row.getValue("roles") as string[];
        return <div className="font-medium capitalize">{roles.map(role => role.replace('ROLE_', '').toLowerCase()).join(', ')}</div>
    }
  },
  {
    accessorKey: "enabled",
    header: "Status",
    cell: ({ row }) => {
        const isEnabled = row.getValue("enabled") as boolean;
        return (
            <div className={`w-fit px-2 py-1 rounded-full text-xs font-semibold ${isEnabled ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {isEnabled ? "Active" : "Disabled"}
            </div>
        )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => <UserActions user={row.original} />,
  },
];