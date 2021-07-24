import {FaHome, FaTag,FaShoppingBag, FaUserCircle} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const BottomTab = () => {
    return (
        <div className='bottom-tab'>
            <NavLink to='/'>
                <FaHome size={17}/>
                <p>Home</p>
            </NavLink>
            <NavLink to='/shop'>
                <FaShoppingBag size={17}/>
                <p>Shop</p>
            </NavLink>
            <NavLink to='/offer'>
                <FaTag size={17}/>
                <p>Offer</p>
            </NavLink>
            <NavLink to='/user'>
                <FaUserCircle size={17}/>
                <p>User</p>
            </NavLink>

        </div>
    )
}

export default BottomTab
