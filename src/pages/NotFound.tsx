import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center" data-sr="up" data-sr-duration="0.7">
        <h1 className="mb-4 text-4xl font-bold text-accent" data-sr="up" data-sr-duration="0.8">404</h1>
        <p className="mb-4 text-xl text-muted-foreground" data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary-hover" data-sr="up" data-sr-duration="0.7">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
