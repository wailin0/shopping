import {useEffect, useState} from "react";
import ProductCarousel from "../fragments/ProductCarousel";
import {dummyProducts} from "../../dummyData";

const Recommended = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        // product.getAllProducts()
        //     .then(res => setProducts(res))
        const rand = [...dummyProducts].sort((a, b) => Math.random()-0.5)
        setProducts(rand)
    }, [])

    return (
        <ProductCarousel title='Recommended For You' products={products} />
    )
}

export default Recommended
