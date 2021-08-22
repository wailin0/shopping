import ProductCarousel2 from "../ProductCarousel2";
import {useEffect, useState} from "react";
import {dummyProducts} from "../../dummyData";

const SimilarProducts = () => {
    const [similarProducts, setSimilarProducts] = useState(null)

    useEffect(() => {
        // product.getAllProducts()
        //     .then(res => setSimilarProducts(res))
        const rand = [...dummyProducts].sort((a, b) => Math.random()-0.5)
        setSimilarProducts(rand)
    }, [])


    return (
        <ProductCarousel2 title='Similar Products' products={similarProducts}/>
    )
}

export default SimilarProducts
