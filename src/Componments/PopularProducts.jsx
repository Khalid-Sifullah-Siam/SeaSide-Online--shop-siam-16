import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/products";

const PopularProducts = async() => {
    const productsObject = await getProducts();
    
    return (
        <div className="my-12">
            <h1 className="text-orange-500 font-bold text-3xl text-center mb-6">🔥 Popular Products</h1>

            <div className="grid lg:flex gap-6">
            {
                productsObject.slice(0,3).map(product => <ProductCard key={product.id} product={product} />)
            }
            </div>


        </div>
    );
};

export default PopularProducts;
