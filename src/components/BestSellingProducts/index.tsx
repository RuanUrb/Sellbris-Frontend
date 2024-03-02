import React from "react";
import * as S from "./style";
import { API_URL } from "@/api/api";
import PrimaryButton from "@/components/Button/PrimaryButton";
import useFetch from "@/hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "@/components/Spinner";
import ImageSkeleton from "@/components/ImageSkeleton";
import arrow from "@/assets/arrow-button.svg";
import { Product } from "@/@types/product";
import getFormatDate from "@/utils/productFormatDate";

const BestSellingProducts = () => {
  const { data, loading, error } = useFetch<Product[]>(
    `${API_URL}products?count=4`
  );
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Side>
        <h2>Last Uploaded Products</h2>
        <p> The best-selling treasures you won't miss.</p>
        <PrimaryButton label="See All" onClick={()=>{navigate('/products')}}  variant="dark" icon={arrow} />
      </S.Side>
      {loading && <Spinner />}
      <S.Cards>
        {data &&
          data.map((product: Product) => {
            console.log(product)
            return (
            <Link to={'/products/' + product.id} key={product.id}>
              <S.Card>
                <ImageSkeleton src={product.images[0].url} alt={product.title} />
                <h3>{product.title}</h3>
                <span>$ {product.price.toFixed(2)}</span>
                <p> {product.location} {getFormatDate(product)} </p>
              </S.Card>
            </Link>
          )})}
      </S.Cards>
    </S.Container>
  );
};

export default BestSellingProducts;
