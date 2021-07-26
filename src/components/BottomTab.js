import {FaHome, FaShoppingBag, FaTag, FaUserCircle} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../Context";

const BottomTab = () => {

    const {userModal, setUserModal} = useContext(Context)

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
            <div onClick={() => setUserModal(!userModal)}>
                <FaUserCircle size={17}/>
                <p>User</p>
            </div>

        </div>
    )
}

export default BottomTab
