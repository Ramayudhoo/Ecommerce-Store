import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Cart() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Cart</h1>

      <div className="border rounded-lg p-6 text-center text-gray-500">
        <p className="mb-4">Cart kamu masih kosong.</p>
        <Button asChild>
          <Link to="/products">Mulai Belanja</Link>
        </Button>
      </div>
    </div>
  );
}

export default Cart;