import {FaRegHeart, FaRegUserCircle, FaShoppingBasket, FaUserCircle} from 'react-icons/fa'
import {useContext} from "react";
import UserModal from "../modals/UserModal";
import SignInModal from "../modals/SignInModal";
import SignUpModal from "../modals/SignUpModal";
import {Context} from "../../Context";
import {Link, useHistory} from 'react-router-dom'
import BasketModal from "../modals/BasketModal";

const AppBar = () => {

    const {user, userModal, basketModal, setBasketModal, setUserModal, signInModal, signUpModal} = useContext(Context)

    const history = useHistory()

    return (
        <div className='appbar'>
            <Link to='/'>
                <img src='https://www.deluxbeauti.com/wp-content/uploads/2021/08/cropped-weblogo.png'
                     className='appbar__logo'
                />
            </Link>
            <div className='appbar__search'>
                <input
                    className='appbar__search-input'
                    placeholder='Search'

                />
            </div>

            <div style={{position: 'relative'}}>
                <div className='appbar__user'
                     onClick={() => setUserModal(!userModal)}
                >
                    {user
                        ? <FaUserCircle size={30}/>
                        : <FaRegUserCircle size={30}/>
                    }
                    <p>{user ? user.name : 'Sign In'}</p>
                </div>

                {userModal && <UserModal/>}
            </div>

            <div className='appbar__loved'>
                <FaRegHeart size={30}/>
            </div>

            <div className='appbar__basket'
                 onClick={() => window.innerWidth <= 1008 ? history.push('/basket') : setBasketModal(!basketModal)}
            >
                <div style={{marginLeft: 20, cursor: 'pointer'}}>
                    <FaShoppingBasket
                        size={30}
                    />
                    <p className='appbar__basket--badge'>3</p>
                    {basketModal && <BasketModal/>}
                </div>
            </div>


            {signInModal && <SignInModal/>}
            {signUpModal && <SignUpModal/>}
        </div>
    )
}

export default AppBar
