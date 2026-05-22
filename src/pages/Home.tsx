import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to the Store</h1>
      <p className="text-gray-500 mt-2">Find the best products here.</p>
      <Button asChild className="mt-4">
        <Link to="/products">View Products</Link>
      </Button>
    </div>
  );
}

export default Home;