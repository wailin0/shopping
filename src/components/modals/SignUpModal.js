import {FaTimes} from "react-icons/fa";
import {useContext, useState} from "react";
import {Context} from "../../Context";
import userService from "../../services/user";
import storage from "../../utils/storage";

const SignUpModal = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    const {setUser} = useContext(Context)

    const handleRegister = (e) => {
        e.preventDefault()

        setError({
            name: !name && 'Name required. Please enter your name',
            email: !email && 'Please enter your email',
            password: !password && 'Please enter a password',
            confirmPassword: !confirmPassword ? 'Please confirm your password' : password !== confirmPassword && 'Password must be the same as above'
        })

        const registerData = {
            name,
            email,
            phone,
            password,
            password_confirmation: confirmPassword
        }

        if (name && email && password && confirmPassword && password === confirmPassword) {
            userService.register(registerData)
                .then(res => {
                    setUser(res.user)
                    storage.saveToken(res.token)
                    setSignUpModal(false)
                })
                .catch(err => {
                    if (err.response.data.errors.email) {
                        setError({email: 'An account already exists for the email address you\'ve entered'})
                    }
                })
        }
    }

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
                <form onSubmit={handleRegister}>
                    <input
                        placeholder='Your name*'
                        className='signin-modal__input'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {error.name && <p className='signin-modal__error'>{error.name}</p>}

                    <input
                        type='email'
                        placeholder='Email address*'
                        className='signin-modal__input'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {error.email && <p className='signin-modal__error'>{error.email}</p>}

                    <input
                        type='phone'
                        placeholder='Phone number (optional)'
                        className='signin-modal__input'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    {error.phone && <p className='signin-modal__error'>{error.phone}</p>}


                    <input
                        type='password'
                        placeholder='Password*'
                        className='signin-modal__input'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error.password && <p className='signin-modal__error'>{error.password}</p>}

                    <input
                        type='password'
                        placeholder='Confirm password*'
                        className='signin-modal__input'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    {error.confirmPassword && <p className='signin-modal__error'>{error.confirmPassword}</p>}

                    <button
                        className='signin-modal__signin'
                    >
                        Join Now
                    </button>
                </form>

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
