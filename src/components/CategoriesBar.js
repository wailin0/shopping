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
                    <p className='categories-bar__category'>{category}</p>
                )}
            </div>
            <div className='categories-bar__mobile'>
                {categories.map(category =>
                    <button className='categories-bar__mobile-button'>{category}</button>
                )}
            </div>
        </div>
    )
}

export default CategoriesBar
