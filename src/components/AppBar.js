import {FaHeart, FaShoppingBasket, FaUserCircle} from 'react-icons/fa'
import {useContext} from "react";
import UserModal from "./UserModal";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import {Context} from "../Context";

const AppBar = () => {

    const {userModal, setUserModal,signInModal,signUpModal } = useContext(Context)

    return (
        <div className='appbar'>
            <img src='https://www.deluxbeauti.com/wp-content/uploads/2021/05/weblogo-300x35.png'
                 className='appbar__logo'
            />
            <div className='appbar__search'>
                <input
                    className='appbar__search-input'
                    placeholder='Search'

                />
            </div>

            <div style={{position: 'relative'}}>
                <div className='appbar__user'
                     onMouseOver={() => setUserModal(true)}
                >
                    <FaUserCircle size={30}/>
                    <p>Sign In</p>
                </div>

                {userModal &&
                <div onMouseLeave={() => setUserModal(false)}>
                    <UserModal/>
                </div>
                }

            </div>


            <div className='appbar__button'>
                <FaHeart size={30}/>
                <FaShoppingBasket size={30} style={{marginLeft: 20}}/>
            </div>


            {signInModal && <SignInModal />}
            {signUpModal && <SignUpModal />}
        </div>
    )
}

export default AppBar
