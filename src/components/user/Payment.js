import {FaPlus} from "react-icons/fa";
import {useState} from "react";

const Payment = () => {
    const [openInputs, setOpenInputs] = useState(false)


    return (
        <div>
            <p className='account__setting--title'>
                Payment & Gift Card
            </p>

            <div className='account__setting--container'>


                <div className='account__setting--container--item'>
                    <p>Credit/Debit Cards</p>
                    {openInputs
                        ?
                        <div>
                            <h3>Add Credit or Debit Card</h3>
                            <div className='account__setting--card-form'>
                                <input
                                    placeholder='Card type'
                                    className='account__setting--input'
                                />
                                <input
                                    placeholder='Card number'
                                    className='account__setting--input'
                                />
                                <div style={{display:'flex'}}>
                                    <input
                                        placeholder='Expiration month'
                                        className='account__setting--input'
                                        style={{marginRight:10}}
                                    />
                                    <input
                                        placeholder='Expiration year'
                                        className='account__setting--input'
                                    />
                                </div>
                                <input
                                    placeholder='name'
                                    className='account__setting--input'
                                />
                                <input
                                    placeholder='phone'
                                    className='account__setting--input'
                                />
                                <input
                                    placeholder='address'
                                    className='account__setting--input'
                                />
                                <input
                                    placeholder='ZIP/Postal code'
                                    className='account__setting--input'
                                />
                                <button className='account__setting--cancel-button'
                                        onClick={() => setOpenInputs(false)}
                                >
                                    Cancel
                                </button>
                                <button className='account__setting--save-button'>
                                    Save
                                </button>
                            </div>
                        </div>
                        :
                        <div style={{display: 'flex', alignItems: 'center',cursor:'pointer'}}
                             onClick={() => setOpenInputs(true)}
                        >
                            <FaPlus/>
                            <p style={{marginLeft: 10}}>Add credit or debit card</p>
                        </div>
                    }
                </div>

                <div className='account__setting--container--item'>
                    <p>Gift Cards</p>
                    <div>
                        <p style={{fontWeight: 'bold'}}>Gift Card balance</p>
                        <p>To check your current balance, enter the card’s 16 digit number and PIN</p>
                        <div style={{marginTop: 20}}>
                            <input
                                placeholder='Card number'
                                className='account__setting--input'
                            />
                            <input
                                placeholder='PIN'
                                className='account__setting--input'
                            />
                            <button className='account__setting--cancel-button'>
                                Check
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment
