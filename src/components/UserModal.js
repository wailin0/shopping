import {FaHeartbeat, FaHistory, FaJediOrder, FaUserCircle, FaUserTag} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../Context";

const UserModal = () => {

    const {setSignInModal, setSignUpModal} = useContext(Context)

    return (
        <>
            <div className='appbar__user--modal'>
                <div className='appbar__user--modal-user'>
                    <FaUserCircle size={40}/>
                    <div>
                        <h4>Good night</h4>
                        <p>Sign in for more personalized experience</p>
                    </div>
                </div>

                <div className='appbar__user--modal-button'>
                    <button
                        className='appbar__user--modal-button-signin'
                        onClick={() => setSignInModal(true)}
                    >
                        Sign In
                    </button>
                    <button
                        className='appbar__user--modal-button-register'
                        onClick={() => setSignUpModal(true)}
                    >
                        Create account
                    </button>
                </div>

                <div className='appbar__user--modal-list'>
                    <Link to='/history'>
                        <FaHistory/>
                        <div>
                            <p>Buy It Again</p>
                            <p>reorder from in-store and store purchases</p>
                        </div>
                    </Link>
                    <Link to='/orders'>
                        <FaJediOrder/>
                        <div>
                            <p>Orders</p>
                            <p>View & track online orders</p>
                        </div>
                    </Link>
                    <Link to='/loved'>
                        <FaHeartbeat/>
                        <div>
                            <p>Loved</p>
                            <p>View saved products</p>
                        </div>
                    </Link>
                    <Link to='/settings'>
                        <FaUserTag/>
                        <div>
                            <p>Account Settings</p>
                            <p>Payments, contact info, address, password</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default UserModal
