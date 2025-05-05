
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20">
      <div className="text-center max-w-md px-6 py-16">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="User" />
              <AvatarFallback className="bg-gradient-royal text-white">
                <Users className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 bg-red-500 text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
              404
            </div>
          </div>
        </div>
        <h1 className="text-8xl font-bold text-primary/60 mb-6">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
