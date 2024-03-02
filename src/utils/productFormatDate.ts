import { Product } from "@/@types/product";

const getFormatDate = (product: Product)=>{
    const date = new Date(product.date)
    return (

    date.getHours() + ':' + date.getMinutes() + ' ' +
    (date.getMonth()+1) + '-' + date.getDate() + '-' + date.getFullYear()

     )
}

export default getFormatDate