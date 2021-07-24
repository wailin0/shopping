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

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <BackToTop />
                <Announcement/>
                <AppBar/>
                <CategoriesBar/>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/product/:name' component={ProductDetail} />
                    <Route path='/shop' component={Shop} />
                </Switch>
                <Footer/>
                <BottomTab/>
            </BrowserRouter>
        </div>
    );
}

export default App;
