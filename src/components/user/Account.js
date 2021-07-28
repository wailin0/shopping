import {useState} from "react";

const Account = () => {
    const [openNameInput, setOpenNameInput] = useState(false)
    const [openEmailInput, setOpenEmailInput] = useState(false)
    const [openAddressInput, setOpenAddressInput] = useState(false)
    const [openPasswordInput, setOpenPasswordInput] = useState(false)

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
                            setOpenAddressInput(false)
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
                        <p>wailin@mgail.com</p>
                        <p onClick={() => {
                            setOpenNameInput(false)
                            setOpenEmailInput(true)
                            setOpenAddressInput(false)
                            setOpenPasswordInput(false)
                        }}>
                            Edit
                        </p>
                    </div>
                }

                {openAddressInput
                    ?
                    <div className='account__setting--account-input'>
                        <input
                            className='account__setting--input'
                            placeholder='address'
                        />
                        <button className='account__setting--cancel-button'
                                onClick={() => setOpenAddressInput(false)}
                        >
                            Cancel
                        </button>
                        <button className='account__setting--save-button'>
                            Save
                        </button>
                    </div>
                    :
                    <div className='account__setting--container--item'>
                        <p>Address</p>
                        <p>setreet ,tow city</p>
                        <p onClick={() => {
                            setOpenNameInput(false)
                            setOpenEmailInput(false)
                            setOpenAddressInput(true)
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
                        />
                        <input
                            className='account__setting--input'
                            placeholder='confirm password'
                            type='password'
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
                            setOpenAddressInput(false)
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
