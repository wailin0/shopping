import AppBar from "./components/AppBar";
import CategoriesBar from "./components/CategoriesBar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import BottomTab from "./components/BottomTab";
import {BrowserRouter} from "react-router-dom";
import BackToTop from "./components/BackToTop";
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
