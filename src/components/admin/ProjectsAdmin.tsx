
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash, Plus } from "lucide-react";
import { toast } from "sonner";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  tags: string[] | null;
}

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image_url: "",
    github_url: "",
    live_url: "",
    tags: ""
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setProjects(data);
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (project: Project) => {
    setCurrentProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      image_url: project.image_url || "",
      github_url: project.github_url || "",
      live_url: project.live_url || "",
      tags: project.tags ? project.tags.join(", ") : ""
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setProjects(projects.filter(project => project.id !== id));
      toast.success("Project deleted successfully");
      setIsDeleteDialogOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to delete project");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tags = formData.tags ? formData.tags.split(",").map(tag => tag.trim()) : [];

    const projectData = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      image_url: formData.image_url || null,
      github_url: formData.github_url || null,
      live_url: formData.live_url || null,
      tags
    };

    try {
      let data, error;

      if (currentProject) {
        // Update existing project
        ({ data, error } = await supabase
          .from("projects")
          .update(projectData)
          .eq("id", currentProject.id)
          .select());
      } else {
        // Create new project
        ({ data, error } = await supabase
          .from("projects")
          .insert([projectData])
          .select());
      }

      if (error) throw error;

      fetchProjects();
      toast.success(`Project ${currentProject ? "updated" : "created"} successfully`);
      setIsDialogOpen(false);
    } catch (error: any) {
      toast.error(error.message || `Failed to ${currentProject ? "update" : "create"} project`);
    }
  };

  const openNewProjectDialog = () => {
    setCurrentProject(null);
    setFormData({
      title: "",
      description: "",
      category: "",
      image_url: "",
      github_url: "",
      live_url: "",
      tags: ""
    });
    setIsDialogOpen(true);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={openNewProjectDialog}>
          <Plus className="mr-2 h-4 w-4" /> Add Project
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
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    No projects found. Add your first project!
                  </TableCell>
                </TableRow>
              ) : (
                projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.category}</TableCell>
                    <TableCell className="max-w-[300px] truncate">{project.description}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(project)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setCurrentProject(project);
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

      {/* Create/Edit Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{currentProject ? "Edit" : "Add"} Project</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category *
                </label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  placeholder="Web Development, UI/UX, etc."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description *
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="image_url" className="text-sm font-medium">
                Image URL
              </label>
              <Input
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="github_url" className="text-sm font-medium">
                  GitHub URL
                </label>
                <Input
                  id="github_url"
                  name="github_url"
                  value={formData.github_url}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="live_url" className="text-sm font-medium">
                  Live URL
                </label>
                <Input
                  id="live_url"
                  name="live_url"
                  value={formData.live_url}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="tags" className="text-sm font-medium">
                Tags (comma-separated)
              </label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="React, TypeScript, Tailwind, etc."
              />
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
            Are you sure you want to delete the project "{currentProject?.title}"? This action cannot be undone.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => currentProject && handleDelete(currentProject.id)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsAdmin;
