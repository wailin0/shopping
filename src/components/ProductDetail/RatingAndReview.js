import {FaStar} from "react-icons/fa";

const RatingAndReview = () => {
    return (

        <div className='product-detail__reviews--container'>
            <h2>Ratings & Reviews (3.4K)</h2>

            <div className='product-detail__reviews--container'>
            {[2, 1, 3, 5, 3].map(value =>
                <div className='product-detail__reviews'>
                    <div className='product-detail__reviews--user'>
                        <img
                            src='https://community.sephora.com/t5/image/serverpage/image-id/1146823i5C4A931743A34FFF/image-dimensions/172x172?v=v2'
                            className='product-detail__reviews--user-photo'
                        />
                        <div style={{marginLeft: 10, marginRight: 'auto'}}>
                            <p className='product-detail__reviews--user-name'>
                                name
                            </p>
                            <p>
                                <FaStar size={13}/><FaStar size={13}/><FaStar size={13}/><FaStar size={13}/><FaStar size={13}/>
                            </p>
                        </div>
                        <p>1 day ago</p>
                    </div>

                    <p className='product-detail__reviews--text'>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Ad amet architecto aspernatur assumenda at
                        corporis dolor dolore dolorem, eum expedita explicabo fuga fugit ipsum iure laudantium
                        possimus
                        sint
                        sit sunt.
                    </p>
                </div>
            )}
            </div>

        </div>
    )
}

export default RatingAndReview
