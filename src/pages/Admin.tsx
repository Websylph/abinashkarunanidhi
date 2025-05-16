
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectsAdmin from "@/components/admin/ProjectsAdmin";
import TestimonialsAdmin from "@/components/admin/TestimonialsAdmin";
import ContactsAdmin from "@/components/admin/ContactsAdmin";
import { User } from "@supabase/supabase-js";

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      
      if (!data.user) {
        navigate("/login");
        return;
      }
      
      setUser(data.user);
      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          navigate("/login");
        }
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your website content</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">{user?.email}</span>
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects Management</CardTitle>
              <CardDescription>Add, edit or remove projects from your portfolio.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectsAdmin />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials">
          <Card>
            <CardHeader>
              <CardTitle>Testimonials Management</CardTitle>
              <CardDescription>Add, edit or remove client testimonials.</CardDescription>
            </CardHeader>
            <CardContent>
              <TestimonialsAdmin />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contact Requests</CardTitle>
              <CardDescription>View and manage contact form submissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactsAdmin />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
