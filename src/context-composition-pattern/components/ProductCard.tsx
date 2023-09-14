import { ReactNode } from "react";
import ProductCardContext from "../context/ProductCardContext";
import { Product } from "../model/product.model";
import { ProductInfo } from "./ProductInfo";
import { ProductTitle } from "./ProductTitle";
import { ProductCategory } from "./ProductCategory";
import { ProductAction } from "./ProductAction";
import { ProductImage } from "./ProductImage";

interface Props {
  image: ReactNode;
  info: ReactNode;
  action: ReactNode;
  product: Product;
}

export const ProductCard = ({ image, info, action, product }: Props) => {
  return (
    <ProductCardContext.Provider value={product}>
      <div className="drink">
        {image}
        <div>
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  )
}

ProductCard.image = ProductImage;
ProductCard.info = ProductInfo;
ProductCard.title = ProductTitle;
ProductCard.category = ProductCategory;
ProductCard.button = ProductAction;
