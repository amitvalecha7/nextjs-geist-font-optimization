
import { useLocation } from "wouter";
import { useEffect } from "react";
import ErrorPage from './ErrorPage';

const NotFound = () => {
  const [location] = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location
    );
  }, [location]);

  return (
    <ErrorPage
      statusCode={404}
      title="Page Not Found"
      message={`Oops! The page you were looking for at "${location}" does not exist.`}
    />
  );
};

export default NotFound;
