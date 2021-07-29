import {
    HiHome,
    HiOutlineHome,
    HiOutlineShoppingBag,
    HiOutlineTag,
    HiShoppingBag,
    HiTag,
    HiUserCircle
} from 'react-icons/hi'
import {NavLink, useLocation} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../Context";

const BottomTab = () => {
    const location = useLocation();
    const {userModal, setUserModal} = useContext(Context)

    return (
        <div className='bottom-tab'>
            <NavLink to='/' activeClassName='bottom-tab__active'>
                {location.pathname === '/'
                    ? <HiHome size={20}/>
                    : <HiOutlineHome size={20}/>
                }
                <p>Home</p>

            </NavLink>
            <NavLink to='/shop' activeClassName='bottom-tab__active'>
                {location.pathname === '/shop'
                    ? <HiShoppingBag size={20}/>
                    : <HiOutlineShoppingBag size={20}/>
                }
                <p>Shop</p>
            </NavLink>

            <NavLink to='/offer' activeClassName='bottom-tab__active'>
                {location.pathname === '/offer'
                    ? <HiTag size={20}/>
                    : <HiOutlineTag size={20}/>
                }
                <p>Offer</p>
            </NavLink>
            <div onClick={() => setUserModal(!userModal)}>
                <HiUserCircle size={20}/>
                <p>User</p>
            </div>

        </div>
    )
}

export default BottomTab
