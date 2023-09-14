import { useProductCardContext } from "../context/ProductCardContext";

export const ProductTitle = () => {
  const product = useProductCardContext();

  return <h2>{product.title}</h2>
}