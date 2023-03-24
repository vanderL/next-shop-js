import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function ProductComId() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum, nulla quos sint libero delectus blanditiis voluptatum. Temporibus soluta, veritatis, at mollitia porro aliquid possimus laboriosam error tempora deleniti sed?</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}