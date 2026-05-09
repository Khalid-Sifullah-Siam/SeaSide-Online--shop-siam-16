const PRODUCTS_URL =
  "https://sea-side-online-shop-siam-16.vercel.app/Products.json";

export async function getProducts() {
  const response = await fetch(PRODUCTS_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const products = await response.json();

  return Array.isArray(products) ? products : [];
}

export async function getProductById(id) {
  const products = await getProducts();

  return products.find((product) => Number(product.id) === Number(id));
}
