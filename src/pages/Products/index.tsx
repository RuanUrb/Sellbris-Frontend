import { Product } from "@/@types/product";
import { API_URL } from "@/api/api";
import useFetch from "@/hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "@/components/Spinner";
import ImageSkeleton from "@/components/ImageSkeleton";
import * as S from "./style";
import getFormatDate from "@/utils/productFormatDate";




const Products = ()=>{
    //@ts-ignore
    const { data, loading, error } = useFetch<Product[]>(`${API_URL}products`)
        const navigate = useNavigate()


    return (
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
    )
}   




export default Products