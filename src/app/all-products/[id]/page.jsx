import { readFile } from "fs/promises";
import path from "path";
import ProductDetails from "@/Componments/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const filePath = path.join(process.cwd(), "public", "Products.json");
  const productsObject = JSON.parse(await readFile(filePath, "utf8"));

  const product = productsObject.find(
    (p) => parseInt(p.id) === parseInt(id)
  );

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;