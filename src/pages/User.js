import {useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom'
import Account from "../components/user/Account";
import Orders from "../components/user/Orders";
import Payment from "../components/user/Payment";

const User = () => {

    const {path} = useParams()
    const history = useHistory()

    const navigate = (route) => {
        history.push(route)
    }

    useEffect(() => {
        history.push(path)
    }, [])


    return (
        <div className='account'>

            <div className='account__nav'>
                <div className={path === 'account' ? 'account__nav--button-active' : 'account__nav--button'}
                     onClick={() => navigate('account')}
                >
                    <p>Account</p>
                </div>
                <div className={path === 'orders' ? 'account__nav--button-active' : 'account__nav--button'}
                     onClick={() => navigate('orders')}
                >
                    <p>Orders</p>
                </div>
                <div className={path === 'payment' ? 'account__nav--button-active' : 'account__nav--button'}
                     onClick={() => navigate('payment')}
                >
                    <p>Payment</p>
                </div>
            </div>


            {path==='account' && <Account /> }
            {path==='orders' && <Orders /> }
            {path==='payment' && <Payment /> }

        </div>
    )
}

export default User
