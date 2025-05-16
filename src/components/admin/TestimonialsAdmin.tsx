
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash, Plus } from "lucide-react";
import { toast } from "sonner";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar_url: string | null;
  is_featured: boolean;
}

const TestimonialsAdmin = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    avatar_url: "",
    is_featured: false,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setTestimonials(data);
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch testimonials");
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      is_featured: checked,
    });
  };

  const handleEdit = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company,
      content: testimonial.content,
      avatar_url: testimonial.avatar_url || "",
      is_featured: testimonial.is_featured || false,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("testimonials")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
      toast.success("Testimonial deleted successfully");
      setIsDeleteDialogOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to delete testimonial");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const testimonialData = {
      name: formData.name,
      role: formData.role,
      company: formData.company,
      content: formData.content,
      avatar_url: formData.avatar_url || null,
      is_featured: formData.is_featured,
    };

    try {
      let data, error;

      if (currentTestimonial) {
        // Update existing testimonial
        ({ data, error } = await supabase
          .from("testimonials")
          .update(testimonialData)
          .eq("id", currentTestimonial.id)
          .select());
      } else {
        // Create new testimonial
        ({ data, error } = await supabase
          .from("testimonials")
          .insert([testimonialData])
          .select());
      }

      if (error) throw error;

      fetchTestimonials();
      toast.success(`Testimonial ${currentTestimonial ? "updated" : "created"} successfully`);
      setIsDialogOpen(false);
    } catch (error: any) {
      toast.error(error.message || `Failed to ${currentTestimonial ? "update" : "create"} testimonial`);
    }
  };

  const openNewTestimonialDialog = () => {
    setCurrentTestimonial(null);
    setFormData({
      name: "",
      role: "",
      company: "",
      content: "",
      avatar_url: "",
      is_featured: false,
    });
    setIsDialogOpen(true);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={openNewTestimonialDialog}>
          <Plus className="mr-2 h-4 w-4" /> Add Testimonial
        </Button>
      </div>

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
                <TableHead>Company</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead>Testimonial</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No testimonials found. Add your first testimonial!
                  </TableCell>
                </TableRow>
              ) : (
                testimonials.map((testimonial) => (
                  <TableRow key={testimonial.id}>
                    <TableCell className="font-medium">{testimonial.name}</TableCell>
                    <TableCell>{testimonial.company}</TableCell>
                    <TableCell>{testimonial.is_featured ? "Yes" : "No"}</TableCell>
                    <TableCell className="max-w-[300px] truncate">{testimonial.content}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(testimonial)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setCurrentTestimonial(testimonial);
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

      {/* Create/Edit Testimonial Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{currentTestimonial ? "Edit" : "Add"} Testimonial</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company *
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Role *
              </label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                placeholder="CEO, Marketing Manager, etc."
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium">
                Testimonial Content *
              </label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="avatar_url" className="text-sm font-medium">
                Avatar URL
              </label>
              <Input
                id="avatar_url"
                name="avatar_url"
                value={formData.avatar_url}
                onChange={handleInputChange}
                placeholder="https://..."
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="is_featured"
                checked={formData.is_featured}
                onCheckedChange={handleSwitchChange}
              />
              <label htmlFor="is_featured" className="text-sm font-medium">
                Featured Testimonial
              </label>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to delete the testimonial from "{currentTestimonial?.name}"? This action cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => currentTestimonial && handleDelete(currentTestimonial.id)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestimonialsAdmin;
