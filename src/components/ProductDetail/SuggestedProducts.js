import ProductCarousel2 from "../ProductCarousel2";
import {useEffect, useState} from "react";
import product from "../../services/product";

const SuggestedProducts = () => {
    const [suggestedProducts, setSuggestedProducts] = useState(null)

    useEffect(() => {
        product.getAllProducts()
            .then(res => setSuggestedProducts(res))
    }, [])


    if (!suggestedProducts){
        return null
    }

    return (
        <ProductCarousel2 title='You May Also Like' products={suggestedProducts}/>
    )
}

export default SuggestedProducts
