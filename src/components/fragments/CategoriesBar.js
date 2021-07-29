import {Link} from "react-router-dom";

const categories = [
    "New",
    "Brands",
    "Makeup",
    "Skincare",
    "Hair",
    "Fragrance",
    "Tools & Brushes",
    "Bath & Body",
    "Mini & Size",
    "Gifts",
    "Clean Beauty",
    "Beauty Under $20",
    "Sale & Offers"
]

const CategoriesBar = () => {
    return (
        <div className='categories-bar'>
            <div className='categories-bar__desktop'>
                {categories.map(category =>
                    <Link to={`/shop/${category}`} className='categories-bar__category'>{category}</Link>
                )}
            </div>
            <div className='categories-bar__mobile'>
                {categories.map(category =>
                    <button className='categories-bar__mobile-button'>
                        <Link to={`/shop/${category}`}>
                            {category}
                        </Link>
                    </button>
                )}
            </div>
        </div>
    )
}

export default CategoriesBar
