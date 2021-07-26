import AppBar from "./components/AppBar";
import CategoriesBar from "./components/CategoriesBar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import BottomTab from "./components/BottomTab";
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
