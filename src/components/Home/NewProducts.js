import {useEffect, useState} from "react";
import ProductCarousel from "../fragments/ProductCarousel";
import {dummyProducts} from "../../dummyData";

const NewProducts = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        // product.getAllProducts()
        //     .then(res => setProducts(res))
        const rand = [...dummyProducts].sort((a, b) => Math.random()-0.5)
        setProducts(rand)
    }, [])

    return (
        <ProductCarousel title='Just Dropped' products={products} />
    )
}

export default NewProducts
