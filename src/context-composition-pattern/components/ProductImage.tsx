import { useProductCardContext } from "../context/ProductCardContext"

export const ProductImage = () => {
  const product = useProductCardContext();
  return <img src={product.image} alt="" />
}