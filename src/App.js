import AppBar from "./components/fragments/AppBar";
import CategoriesBar from "./components/fragments/CategoriesBar";
import Announcement from "./components/fragments/Announcement";
import Footer from "./components/fragments/Footer";
import BottomTab from "./components/fragments/BottomTab";
import {BrowserRouter} from "react-router-dom";
import BackToTop from "./components/fragments/BackToTop";
import Router from "./Router";
import {useEffect, useState} from "react";
import {Context} from "./Context";
import storage from "./utils/storage";
import userService from "./services/user";

function App() {
    const [user, setUser] = useState(null)
    const [userModal, setUserModal] = useState(false)
    const [signInModal, setSignInModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)
    const [basketModal, setBasketModal] = useState(false)


    useEffect(() => {
        const token = storage.loadToken()

        if (token){
            userService.getUser()
                .then(res => {
                    setUser(res)
                })
        }
    }, [])

    return (
        <div className="container">
            <Context.Provider
                value={{
                    user,
                    setUser,
                    userModal,
                    setUserModal,
                    signInModal,
                    setSignInModal,
                    signUpModal,
                    setSignUpModal,
                    basketModal,
                    setBasketModal
                }}>
                <BrowserRouter>
                    <BackToTop/>
                    <Announcement/>
                    <AppBar/>
                    <CategoriesBar/>
                    <Router/>
                    <Footer/>`
                    <BottomTab/>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}

export default App;
