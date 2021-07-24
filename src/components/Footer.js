import {FaFacebook, FaInstagram, FaStore, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer__content'>
                <div className='footer__information'>
                    <div>
                        <FaStore size={30}/>
                        <p>Customer Service Chat</p>
                    </div>
                    <div>
                        <FaStore size={30}/>
                        <p>+95 09 48448484</p>
                    </div>
                    <div>
                        <FaStore size={30}/>
                        <p>Get the App</p>
                    </div>
                    <div>
                        <FaStore size={30}/>
                        <p>Accepted most credit card</p>
                    </div>
                </div>

                <div className='footer__app'>
                    <p style={{fontSize: 20, marginBottom: 20}}>Download the Shopping App</p>
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
                        <p>C 2021 Shopping USA, Inc. All rights reserved.</p>
                        <div className='footer__copyright-info'>
                            <p>Privacy Policy</p>
                            <p>Terms of User</p>
                            <p>Sitemap</p>
                        </div>
                    </div>

                    <div className='footer__copyright-social'>
                        <FaFacebook size={30}/>
                        <FaInstagram size={30}/>
                        <FaTwitter size={30}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
