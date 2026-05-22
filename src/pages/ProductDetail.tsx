import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "../data/product";

function ProductDetail() {
  const { id } = useParams();

  // Cari produk berdasarkan id dari URL
  const product = products.find((p) => p.id === Number(id));

  // Conditional rendering — produk tidak ditemukan
  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
        <Button asChild>
          <Link to="/products">Kembali ke Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Button asChild variant="ghost" className="mb-4">
        <Link to="/products">← Kembali</Link>
      </Button>

      <div className="border rounded-lg p-6 shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-6">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductDetail;