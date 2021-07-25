import {
    FaAndroid,
    FaCreditCard,
    FaFacebook,
    FaFacebookMessenger,
    FaInstagram,
    FaPhone,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer__content'>
                <div className='footer__information'>
                    <div>
                        <FaFacebookMessenger size={30}/>
                        <p>Customer Service Chat</p>
                    </div>
                    <div>
                        <FaPhone size={30}/>
                        <p>+95 09 48448484</p>
                    </div>
                    <div>
                        <FaAndroid size={30}/>
                        <p>Get the App</p>
                    </div>
                    <div>
                        <FaCreditCard size={30}/>
                        <p>Accept most payment</p>
                    </div>
                </div>

                <div className='footer__app'>
                    <p style={{fontSize: 20, marginBottom: 20}}>Download the App</p>
                    <div className='footer__app-download'>
                        <img src='https://www.sephora.com/img/ufe/badge-google-play.svg'
                        />
                        <img src='https://www.sephora.com/img/ufe/badge-app-store.svg'
                             style={{marginLeft: 10}}
                        />
                    </div>
                </div>

                <div className='footer__copyright'>
                    <div>
                        <p>© 2021 Delux Beauti. All rights reserved.</p>
                        <div className='footer__copyright-info'>
                            <p>Privacy Policy</p>
                            <p>Terms of User</p>
                            <p>Sitemap</p>
                        </div>
                    </div>

                    <div className='footer__copyright-social'>
                        <a href='https://facebook.com/deluxbeauti'><FaFacebook size={30}/></a>
                        <FaInstagram size={30}/>
                        <FaTwitter size={30}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
