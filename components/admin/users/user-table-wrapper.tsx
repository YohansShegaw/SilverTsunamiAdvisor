"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { DataTable } from "@/components/admin/data-table"; // Your original, simple data table
import { getUserColumns, User } from "./user-columns";
// import { UserEditModal } from "./user-edit-modal";
import { toast } from "sonner";

export function UserTableWrapper() {
    // State now holds a simple array of users
    const [users, setUsers] = useState<User[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const fetchData = async () => {
        try {
            // Use the correct endpoint path from your controller
            const response = await api.get<User[]>("/api/admin/users");
            setUsers(response.data);
        } catch (error) { 
            console.error("Failed to fetch users", error); 
            toast.error("Failed to load user data.");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };
    
    // Pass the simple refetch function to the columns
    const columns = getUserColumns({ onEdit: handleEdit, refetch: fetchData });

    return (
        <div>
            {/* The DataTable is now simple again */}
            <DataTable 
                columns={columns} 
                data={users}
            />
            {/* <UserEditModal 
                isOpen={isEditModalOpen} 
                setIsOpen={setIsEditModalOpen} 
                user={selectedUser} 
                onSuccess={fetchData} 
            /> */}
        </div>
    );
}