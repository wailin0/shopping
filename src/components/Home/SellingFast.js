import {useEffect, useState} from "react";
import ProductCarousel from "../ProductCarousel";
import {dummyProducts} from "../../dummyData";

const SellingFast = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        // product.getAllProducts()
        //     .then(res => setProducts(res))
        const rand = [...dummyProducts].sort((a, b) => Math.random()-0.5)
        setProducts(rand)
    }, [])

    return (
        <ProductCarousel title='Selling Fast' products={products} />
    )
}

export default SellingFast
