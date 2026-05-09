import ProductCard from "@/Componments/ProductCard";
import { getProducts } from "@/lib/products";

export const metadata = {
  title: "SeaSide | All Products",
  description: "Browse every SeaSide product in one place.",
};


const AllProductsPage = async() => {
        const productsObject = await getProducts();
    return (
        <div>
            <h1 className="text-orange-500 font-bold text-3xl text-center my-6">🔥 All Products</h1>


            <div className="grid lg:grid-cols-3 gap-12">
                {
                    productsObject.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>

        </div>
    );
};

export default AllProductsPage;
