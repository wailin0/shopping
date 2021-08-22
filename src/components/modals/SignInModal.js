import {FaTimes} from "react-icons/fa";
import {useContext, useState} from "react";
import {Context} from "../../Context";
import userService from "../../services/user";
import storage from "../../utils/storage";

const SignInModal = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        email: '',
        password: '',
        invalid: ''
    })


    const {setUser, setSignInModal, setSignUpModal} = useContext(Context)


    const login = (e) => {
        e.preventDefault()

        setError({
            email: !email && 'Please enter your email',
            password: !password && 'Please enter your password'
        })

        const loginData = {
            email,
            password
        }

        if (email && password) {
            userService.login(loginData)
                .then(res => {
                    setUser(res.user)
                    storage.saveToken(res.token)
                    setSignInModal(false)
                })
                .catch(err => {
                    setError({invalid: 'We\'re sorry, there is an error with your email and/or password. Please try again'})
                })
        }
    }

    return (
        <div className='signin-modal'>
            <div className='signin-modal__title'>
                <h3>Sign in to Delux Beauti</h3>
                <FaTimes
                    style={{cursor: 'pointer'}}
                    onClick={() => setSignInModal(false)}
                />
            </div>

            {error.invalid && <p className='signin-modal__error'>{error.invalid}</p>}

            <div>
                <form onSubmit={login}>
                    <input
                        type='email'
                        placeholder='Email address*'
                        className='signin-modal__input'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {error.email && <p className='signin-modal__error'>{error.email}</p>}

                    <div>
                        <input
                            type='password'
                            placeholder='Password*'
                            className='signin-modal__input'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {error.password && <p className='signin-modal__error'>{error.password}</p>}
                    </div>
                    <p className='signin-modal__forget'>Forget password?</p>
                    <button className='signin-modal__signin'>
                        Sign In
                    </button>
                </form>


                <h3>New to Delux Beauti?</h3>
                <button className='signin-modal__register'
                        onClick={() => {
                            setSignInModal(false)
                            setSignUpModal(true)
                        }}
                >
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
