import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconShoppingCart} from "@tabler/icons-react";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user,isAuthenticated } = useAuth();

  return (
    <nav className="border-b px-8 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">
        MyStore
      </Link>

      <div className="flex gap-2">
        <Button size="lg" variant="ghost" asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button size="lg" variant="ghost" asChild>
          <Link to="/products">Products</Link>
        </Button>
        {isAuthenticated && (
          <Button size="lg" variant="ghost" asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        )}
        <Button size="lg" variant="outline" asChild>
          <Link to="/cart">
            <IconShoppingCart className="mr-2" />
            Cart
          </Link>
        </Button>
      {isAuthenticated ? (
          <span className="text-sm text-gray-500 ml-2">👤 {user?.name}</span>
        ) : (
          <Button size="lg" asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;