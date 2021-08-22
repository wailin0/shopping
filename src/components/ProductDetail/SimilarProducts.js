import ProductCarousel2 from "../ProductCarousel2";
import {useEffect, useState} from "react";
import product from "../../services/product";

const SimilarProducts = () => {
    const [similarProducts, setSimilarProducts] = useState(null)

    useEffect(() => {
        product.getAllProducts()
            .then(res => setSimilarProducts(res))
    }, [])


    if (!similarProducts){
        return null
    }

    return (
        <ProductCarousel2 title='Similar Products' products={similarProducts}/>
    )
}

export default SimilarProducts
