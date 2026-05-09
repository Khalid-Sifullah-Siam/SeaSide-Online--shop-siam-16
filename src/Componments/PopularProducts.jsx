import ProductCard from "./ProductCard";
import { readFile } from "fs/promises";
import path from "path";

const PopularProducts = async() => {
    const filePath = path.join(process.cwd(), "public", "Products.json");
    const productsObject = JSON.parse(await readFile(filePath, "utf8"));
    
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
