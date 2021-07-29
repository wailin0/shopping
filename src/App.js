import AppBar from "./components/fragments/AppBar";
import CategoriesBar from "./components/fragments/CategoriesBar";
import Announcement from "./components/fragments/Announcement";
import Footer from "./components/fragments/Footer";
import BottomTab from "./components/fragments/BottomTab";
import {BrowserRouter} from "react-router-dom";
import BackToTop from "./components/BackToTop";
import Router from "./Router";
import {useState} from "react";
import {Context} from "./Context";

function App() {
    const [userModal, setUserModal] = useState(false)
    const [signInModal, setSignInModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)
    const [basketModal, setBasketModal] = useState(false)

    return (
        <div className="container">
            <Context.Provider
                value={{
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
                    <Footer/>
                    <BottomTab/>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
}

export default App;
