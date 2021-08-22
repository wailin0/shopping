import {useContext, useEffect, useState} from "react";
import {Context} from "../../Context";

const Account = () => {
    const [openNameInput, setOpenNameInput] = useState(false)
    const [openEmailInput, setOpenEmailInput] = useState(false)
    const [openPhoneInput, setOpenPhoneInput] = useState(false)
    const [openPasswordInput, setOpenPasswordInput] = useState(false)

    const {user} = useContext(Context)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        setName(user.name)
        setPhone(user.phone)
        setEmail(user.email)
    }, [user])

    return (
        <div className='account__setting'>
            <p className='account__setting--title'>
                Account Information
            </p>

            <div className='account__setting--container'>


                {openNameInput
                    ?
                    <div className='account__setting--account-input'>
                        <input
                            className='account__setting--input'
                            placeholder='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <button className='account__setting--cancel-button'
                                onClick={() => setOpenNameInput(false)}
                        >
                            Cancel
                        </button>
                        <button className='account__setting--save-button'>
                            Save
                        </button>
                    </div>
                    :
                    <div className='account__setting--container--item'>
                        <p>Name</p>
                        <p>Wai Lin</p>
                        <p onClick={() => {
                            setOpenNameInput(true)
                            setOpenEmailInput(false)
                            setOpenPhoneInput(false)
                            setOpenPasswordInput(false)
                        }}>
                            Edit
                        </p>
                    </div>
                }


                {openEmailInput
                    ?
                    <div className='account__setting--account-input'>
                        <input
                            className='account__setting--input'
                            placeholder='email'
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button className='account__setting--cancel-button'
                                onClick={() => setOpenEmailInput(false)}
                        >
                            Cancel
                        </button>
                        <button className='account__setting--save-button'>
                            Save
                        </button>
                    </div>
                    :
                    <div className='account__setting--container--item'>
                        <p>Email</p>
                        <p>{email && email}</p>
                        <p onClick={() => {
                            setOpenNameInput(false)
                            setOpenEmailInput(true)
                            setOpenPhoneInput(false)
                            setOpenPasswordInput(false)
                        }}>
                            Edit
                        </p>
                    </div>
                }

                {openPhoneInput
                    ?
                    <div className='account__setting--account-input'>
                        <input
                            className='account__setting--input'
                            placeholder='phone'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <button className='account__setting--cancel-button'
                                onClick={() => setOpenPhoneInput(false)}
                        >
                            Cancel
                        </button>
                        <button className='account__setting--save-button'>
                            Save
                        </button>
                    </div>
                    :
                    <div className='account__setting--container--item'>
                        <p>Phone</p>
                        <p>{phone && phone}</p>
                        <p onClick={() => {
                            setOpenNameInput(false)
                            setOpenEmailInput(false)
                            setOpenPhoneInput(true)
                            setOpenPasswordInput(false)
                        }}>
                            Edit
                        </p>
                    </div>
                }

                {openPasswordInput
                    ?
                    <div className='account__setting--account-input'>
                        <input
                            className='account__setting--input'
                            placeholder='password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input
                            className='account__setting--input'
                            placeholder='confirm password'
                            type='password'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <button className='account__setting--cancel-button'
                                onClick={() => setOpenPasswordInput(false)}
                        >
                            Cancel
                        </button>
                        <button className='account__setting--save-button'>
                            Save
                        </button>
                    </div>
                    :
                    <div className='account__setting--container--item'>
                        <p>Password</p>
                        <p>*****</p>
                        <p onClick={() => {
                            setOpenNameInput(false)
                            setOpenEmailInput(false)
                            setOpenPhoneInput(false)
                            setOpenPasswordInput(true)
                        }}>
                            Edit
                        </p>
                    </div>
                }

            </div>
        </div>
    )
}

export default Account
