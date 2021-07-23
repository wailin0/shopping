const Carousel = ({title, products}) => {
    return (
        <div style={{marginTop: 20}}>
            <p className='carousel__title'>{title}</p>

            <div className='carousel'>
                {products.map(product =>
                    <div className='carousel__product'>
                        <img src={product.photoURL}
                             className='carousel__product-photo'
                        />
                        <p className='carousel__product-brand'>{product.brand}</p>
                        <p className='carousel__product-name'>{product.name}</p>


                    </div>
                )}
            </div>
        </div>
    )
}

export default Carousel
