import {FaTimes} from "react-icons/fa";
import {useContext} from "react";
import {Context} from "../../Context";

const SignUpModal = () => {

    const {setSignInModal, setSignUpModal} = useContext(Context)

    return (
        <div className='signin-modal'>
            <div className='signin-modal__title'>
                <p></p>
                <h3>Create an account</h3>
                <FaTimes
                    style={{cursor: 'pointer'}}
                    onClick={() => setSignUpModal(false)}
                />
            </div>
            <div>
                <div>
                    <input
                        placeholder='Your name*'
                        required
                        className='signin-modal__input'
                    />
                    <input
                        type='email'
                        placeholder='Email address*'
                        required
                        className='signin-modal__input'
                    />
                    <input
                        type='phone'
                        placeholder='Phone number (optional)'
                        className='signin-modal__input'
                    />
                    <input
                        type='password'
                        placeholder='Password*'
                        required
                        className='signin-modal__input'
                    />
                    <input
                        type='password'
                        placeholder='Confirm password*'
                        required
                        className='signin-modal__input'
                    />
                </div>

                <button className='signin-modal__signin'>
                    Join In
                </button>

                <h3>Already have an account?</h3>
                <button className='signin-modal__register'
                        onClick={() => {
                            setSignUpModal(false)
                            setSignInModal(true)
                        }}
                >
                    Sign in to Delux Beauti
                </button>
            </div>

            <div style={{marginTop: 20, fontSize: 15}}>
                <p>
                    By clicking “Join Now” you acknowledge that you are agreed to Delux Beauti’s
                    <a href="" style={{color: 'blue', margin: '0 5px'}}>
                        Privacy Policy
                    </a>
                    ,
                    <a href="" style={{color: 'blue', marginRight: 5}}>
                        Terms of Use
                    </a>
                    , and automatically receive offers and notifications via email.
                </p>
                <p style={{marginTop: 20}}>
                    Delux Beauti uses Google ReCaptcha and by registering, users are subject to Google’s
                    <a href="https://policies.google.com/privacy?hl=en"
                       style={{color: 'blue', margin: '0 5px'}}
                    >
                        privacy policy
                    </a>
                    &
                    <a href="https://policies.google.com/terms?hl=en"
                       style={{color: 'blue', marginLeft: 5}}
                    >
                        terms.
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignUpModal
