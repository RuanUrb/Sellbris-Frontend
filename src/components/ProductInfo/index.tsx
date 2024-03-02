import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { API_URL } from "@/api/api";
import * as S from "./style";
import UserContext from "@/context/UserContext";
import ImageSkeleton from "@/components/ImageSkeleton";
import Spinner from "@/components/Spinner";


const ProductInfo = () => {
  const params = useParams();
  const { data: productData, error, loading } = useFetch(`${API_URL}products/${params.id}`);
  const { addProductToCart } = React.useContext(UserContext);
  console.log(productData)
  return (
    <S.Container>
      {loading && <Spinner />}
      {productData &&
        <S.Product>
          <ImageSkeleton src={productData.images[0].url} alt={productData.category} />
          <div>
            <h1>{productData.title}</h1>
            <S.Subtitle>
              {productData.seller.name} - {productData.seller.location}
            </S.Subtitle>
            <S.Price>
              For:
              <strong>${productData.price.toFixed(2)}</strong>
            </S.Price>
            <S.Controls>
              <S.BuyButton color="black">Buy</S.BuyButton>
              <S.CartButton color='black' onClick={() => addProductToCart(productData)}> Wishlist &#10084; </S.CartButton>
            </S.Controls>
            <S.ShippingPromo> Or deal directly with the seller</S.ShippingPromo>
          </div>
        </S.Product>
      }
      {!loading && <h2>Product description</h2>}
      <p>{productData && productData.description}</p>
    </S.Container>
  )
}

export default ProductInfo