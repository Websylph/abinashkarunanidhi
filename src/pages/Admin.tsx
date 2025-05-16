
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
import { toast } from "sonner";

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const checkUser = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.auth.getUser();
        
        if (error) {
          throw error;
        }
        
        if (!data.user) {
          console.log("No user found, redirecting to login");
          navigate("/login");
          return;
        }
        
        // User is authenticated
        console.log("User authenticated:", data.user);
        setUser(data.user);

      } catch (error: any) {
        console.error("Auth error:", error.message);
        toast.error("Authentication error: " + error.message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event);
        
        if (event === "SIGNED_OUT") {
          navigate("/login");
          return;
        }
        
        // When signing in, update the user
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      // Clean up auth state before signing out
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });
      
      await supabase.auth.signOut({ scope: 'global' });
      toast.success("Signed out successfully");
      navigate("/login");
    } catch (error: any) {
      toast.error("Error signing out: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not loading and no user, redirect to login
  if (!user) {
    return null; // Will redirect in useEffect
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
