import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";

const Router = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/product/:name' component={ProductDetail} />
            <Route path='/shop' component={Shop} />
        </Switch>
    )
}

export default Router
