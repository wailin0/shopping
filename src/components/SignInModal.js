import {FaTimes} from "react-icons/fa";

const SignInModal = ({setSignInModal}) => {
    return (
        <div className='signin-modal'>
            <div className='signin-modal__title'>
                <h3>Sign in to Delux Beauti</h3>
                <FaTimes
                    style={{cursor: 'pointer'}}
                    onClick={() => setSignInModal(false)}
                />
            </div>
            <div>
                <div>
                    <input
                        type='email'
                        placeholder='Email address*'
                        required
                        className='signin-modal__input'
                    />
                    <div>
                        <input
                            type='password'
                            placeholder='Password*'
                            required
                            className='signin-modal__input'
                        />
                    </div>
                    <p className='signin-modal__forget'>Forget password?</p>
                </div>

                <button className='signin-modal__signin'>
                    Sign In
                </button>

                <h3>New to Delux Beauti?</h3>
                <button className='signin-modal__register'>
                    Create Account
                </button>
            </div>

            <div style={{display: 'flex', marginTop: 20, alignItems: 'center', fontSize: 15, justifyContent: 'center'}}>
                <p style={{color: 'blue'}}>Terms of User</p>
                <p style={{margin: '0 5px'}}>&</p>
                <p style={{color: 'blue'}}>Privacy Policy</p>
            </div>
        </div>
    )
}

export default SignInModal
