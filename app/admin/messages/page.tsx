import { MessageTableWrapper } from "@/components/admin/messages/message-table-wrapper";

export default function AdminMessagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-white">Contact Messages</h1>
      <p className="text-muted-foreground mb-8">
        Here are the messages submitted through your contact form.
      </p>
      <MessageTableWrapper />
    </div>
  );
}