import { useProductCardContext } from "../context/ProductCardContext";

export const ProductCategory = () => {
  const product = useProductCardContext();
  return <h2>{product.category}</h2>
}