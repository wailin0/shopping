import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import NotFoundPage from "./pages/NotFoundPage";
import User from "./pages/User";

const Router = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/product/:name' component={ProductDetail} />
            <Route path='/shop' component={Shop} />
            <Route path='/basket' component={Basket} />
            <Route path='/user/:path' component={User} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}

export default Router
