
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Trash, Eye } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: string | null;
  created_at: string;
}

const ContactsAdmin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setContacts(data);
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("contacts")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      
      setContacts(contacts.map(contact => {
        if (contact.id === id) {
          return { ...contact, status: newStatus };
        }
        return contact;
      }));
      
      toast.success(`Contact marked as ${newStatus}`);
      setIsViewDialogOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to update contact status");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("contacts")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setContacts(contacts.filter(contact => contact.id !== id));
      toast.success("Contact deleted successfully");
      setIsDeleteDialogOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to delete contact");
    }
  };

  const getStatusBadge = (status: string | null) => {
    switch (status) {
      case "read":
        return <Badge variant="outline">Read</Badge>;
      case "replied":
        return <Badge className="bg-green-500">Replied</Badge>;
      case "archived":
        return <Badge variant="secondary">Archived</Badge>;
      default:
        return <Badge className="bg-blue-500">Unread</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No contacts found.
                  </TableCell>
                </TableRow>
              ) : (
                contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.subject || "No subject"}</TableCell>
                    <TableCell>{formatDate(contact.created_at)}</TableCell>
                    <TableCell>{getStatusBadge(contact.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => {
                          setCurrentContact(contact);
                          setIsViewDialogOpen(true);
                          // If the contact is unread, mark it as read
                          if (contact.status === "unread") {
                            handleStatusChange(contact.id, "read");
                          }
                        }}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setCurrentContact(contact);
                            setIsDeleteDialogOpen(true);
                          }}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* View Contact Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Contact Message</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Name</h4>
                <p>{currentContact?.name}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                <p>{currentContact?.email}</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Subject</h4>
              <p>{currentContact?.subject || "No subject"}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Message</h4>
              <p className="whitespace-pre-wrap">{currentContact?.message}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Received on</h4>
              <p>{currentContact?.created_at && formatDate(currentContact.created_at)}</p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Status:</span>
                {currentContact && getStatusBadge(currentContact.status)}
              </div>
              <div className="flex space-x-2">
                {currentContact?.status !== "replied" && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => currentContact && handleStatusChange(currentContact.id, "replied")}
                  >
                    Mark as Replied
                  </Button>
                )}
                {currentContact?.status !== "archived" && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => currentContact && handleStatusChange(currentContact.id, "archived")}
                  >
                    Archive
                  </Button>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
            <Button
              onClick={() => {
                if (currentContact?.email) {
                  window.open(`mailto:${currentContact.email}?subject=Re: ${currentContact.subject || 'Your message'}`, '_blank');
                }
              }}
            >
              Reply via Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to delete this contact message? This action cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => currentContact && handleDelete(currentContact.id)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactsAdmin;

