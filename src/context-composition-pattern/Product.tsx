import { ProductCard } from "./components/ProductCard";
import './composition.css';
import { Product } from "./model/product.model";

const product: Product = {
  id: 1,
  image: 'https://static.wixstatic.com/media/d2b1c5_5ffe591fcbe54adfa26e0f51bc633c82~mv2_d_1200_1200_s_2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d2b1c5_5ffe591fcbe54adfa26e0f51bc633c82~mv2_d_1200_1200_s_2.jpg',
  title: 'Monster Juice Monster',
  category: 'monster',
  price: 3
};

function CompositionContext() {
  return (
    <>
      <h2>Composition + Context + Compound Component</h2>
      <ProductCard
        product={product}
        image={
          <ProductCard.image />
        }
        info={
          <ProductCard.info>
            <ProductCard.title />
            <ProductCard.category />
          </ProductCard.info>
        }
        action={
          <ProductCard.button />
        }
      />
    </>
  )
}

export default CompositionContext;