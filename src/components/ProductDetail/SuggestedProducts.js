import ProductCarousel2 from "../ProductCarousel2";
import {useEffect, useState} from "react";
import {dummyProducts} from "../../dummyData";

const SuggestedProducts = () => {
    const [suggestedProducts, setSuggestedProducts] = useState(null)

    useEffect(() => {
        // product.getAllProducts()
        //     .then(res => setSuggestedProducts(res))
        const rand = [...dummyProducts].sort((a, b) => Math.random()-0.5)
        setSuggestedProducts(rand)
    }, [])

    return (
        <ProductCarousel2 title='You May Also Like' products={suggestedProducts}/>
    )
}

export default SuggestedProducts
