import AppBar from "./components/AppBar";
import CategoriesBar from "./components/CategoriesBar";
import Announcement from "./components/Announcement";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BottomTab from "./components/BottomTab";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import BackToTop from "./components/BackToTop";
import Shop from "./pages/Shop";
import Router from "./Router";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <BackToTop />
                <Announcement/>
                <AppBar/>
                <CategoriesBar/>
                <Router />
                <Footer/>
                <BottomTab/>
            </BrowserRouter>
        </div>
    );
}

export default App;
