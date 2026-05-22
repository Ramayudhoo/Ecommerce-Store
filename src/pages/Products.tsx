import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "../data/product";

function Products() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-500 text-sm line-clamp-2">
              {product.description}
            </p>
            <p className="font-bold text-blue-600">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to={`/products/${product.id}`}>Lihat Detail</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;