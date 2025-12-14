"use client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  receivedAt: string;
};

export const messageColumns: ColumnDef<ContactMessage>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "message", header: "Message", cell: ({ row }) => 
        <p className="max-w-xs truncate">{row.original.message}</p> 
    },
    { accessorKey: "receivedAt", header: "Received", cell: ({ row }) => 
        format(new Date(row.original.receivedAt), "MMM d, yyyy 'at' h:mm a")
    },
    // You can add an "Actions" column here later to mark messages as "Read"
];