import ProductDetails from "@/Componments/ProductDetails";
import { getProductById } from "@/lib/products";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  return {
    title: product ? `${product.name} | SeaSide` : "Product Details | SeaSide",
    description: product?.description || "View product details on SeaSide.",
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
