"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { MessageDataTable } from "./MessageDataTable"; // <-- Import the new dedicated table
import { messageColumns, ContactMessage } from "./message-columns";
import { toast } from "sonner";

export function MessageTableWrapper() {
    // State is now a simple array, not a Page object.
    const [messages, setMessages] = useState<ContactMessage[]>([]);

    const fetchData = async () => {
        try {
            // Fetch all messages at once.
            const response = await api.get("/api/contact-messages");
            if (response.data.success) {
                // The backend pagination will return the content in the 'data' field
                setMessages(response.data.data.content || []);
            }
        } catch (error) { 
            console.error("Failed to fetch messages", error); 
            toast.error("Failed to load messages.");
        }
    };

    useEffect(() => { fetchData(); }, []);

    return (
        // Use the new MessageDataTable. It doesn't need any pagination or filter props.
        <MessageDataTable 
            columns={messageColumns} 
            data={messages}
        />
    );
}