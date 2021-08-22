import {FaHistory, FaRegAddressCard, FaRegHeart, FaRegUserCircle, FaUserCircle} from "react-icons/fa";
import {GoPackage} from 'react-icons/go'
import {useHistory} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../Context";
import userService from "../../services/user";
import storage from "../../utils/storage";

const UserModal = () => {

    const history = useHistory()
    const [time, setTime] = useState('')

    const {user, setUser, setUserModal, setSignInModal, setSignUpModal} = useContext(Context)


    useEffect(() => {
        const today = new Date()
        const currentHour = today.getHours()

        if (currentHour < 12) {
            setTime('Good morning')
        } else if (currentHour < 18) {
            setTime('Good afternoon')
        } else {
            setTime('Good evening')
        }
    }, [])

    const logout = () => {
        userService.logout()
            .then(() => {
                storage.clearToken()
                setUser(null)
                setUserModal(false)
                history.push('/')
            })
    }

    return (
        <>
            <div className='modal__backdrop'
                 onClick={() => setUserModal(false)}
            >

            </div>
            <div className='user-modal'>
                <div className='user-modal__user'>
                    {user
                        ? <FaUserCircle size={40}/>
                        : <FaRegUserCircle size={40}/>
                    }
                    <div>
                        <h4>{time}{user && `, ${user.name}`}</h4>
                        <p>{!user && 'Sign in for more personalized experience'}</p>
                    </div>
                </div>

                {user
                    ?
                    <a
                        className='user-modal__item'
                        onClick={() => {
                            history.push('/rewards')
                            setUserModal(false)
                        }}>
                        <div>
                            <p>Rewards</p>
                            <p>Redeem items, samples, more</p>
                        </div>
                        <div>
                            <p>0</p>
                            <p>Points</p>
                        </div>
                    </a>
                    :
                    <div className='user-modal__button'>
                        <button
                            className='user-modal__button-signin'
                            onClick={() => {
                                setUserModal(false)
                                setSignInModal(true)
                            }}
                        >
                            Sign In
                        </button>
                        <button
                            className='user-modal__button-register'
                            onClick={() => {
                                setUserModal(false)
                                setSignUpModal(true)
                            }}
                        >
                            Create account
                        </button>
                    </div>
                }

                <div className='user-modal__list'>
                    <a onClick={() => {
                        history.push('/purchase-history')
                        setUserModal(false)
                    }}>
                        <FaHistory/>
                        <div>
                            <p>Buy It Again</p>
                            <p>reorder from in-store and store purchases</p>
                        </div>
                    </a>
                    <a onClick={() => {
                        history.push('/user/orders')
                        setUserModal(false)
                    }}>
                        <GoPackage/>
                        <div>
                            <p>Orders</p>
                            <p>View & track online orders</p>
                        </div>
                    </a>
                    <a onClick={() => {
                        history.push('/loved')
                        setUserModal(false)
                    }}>
                        <FaRegHeart/>
                        <div>
                            <p>Loved</p>
                            <p>View saved products</p>
                        </div>
                    </a>
                    <a onClick={() => {
                        history.push('/user/account')
                        setUserModal(false)
                    }}>
                        <FaRegAddressCard/>
                        <div>
                            <p>Account Settings</p>
                            <p>Payments, contact info, address, password</p>
                        </div>
                    </a>
                    {user &&
                        <a onClick={() => logout()}>
                            <p>Logout</p>
                        </a>
                    }
                </div>
            </div>
        </>
    )
}

export default UserModal
