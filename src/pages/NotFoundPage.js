import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className='not-found-page'>
            <p className='not-found-page__title'>Sorry! The page you're looking for cannot be found</p>
            <img
                src='https://www.sephora.com/img/ufe/inactive.svg'
                className='not-found-page__photo'
            />
            <p>Try searching or go to out home page to continue shopping</p>

            <Link to='/'>
                <button className='not-found-page__button'>
                    Go to Home Page
                </button>
            </Link>
        </div>
    )
}

export default NotFoundPage
