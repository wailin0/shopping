import {FaHeart, FaShoppingBasket, FaUserCircle} from 'react-icons/fa'

const AppBar = () => {
    return (
        <div className='appbar'>
            <img src='https://www.sephora.com/img/ufe/logo.svg'
                 className='appbar__logo'
            />
            <div className='appbar__search'>
                <input
                    className='appbar__search-input'
                    placeholder='Search'

                />
            </div>

            <div className='appbar__signin'>
                <FaUserCircle size={30}/>
                <p>Sign In</p>
            </div>


            <div className='appbar__button'>
                <FaHeart size={30}/>
                <FaShoppingBasket size={30} style={{marginLeft: 20}}/>
            </div>

        </div>
    )
}

export default AppBar
