import './App.css';
import AppBar from "./components/AppBar";
import CategoriesBar from "./components/CategoriesBar";
import Announcement from "./components/Announcement";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <Announcement/>
            <AppBar/>
            <CategoriesBar/>
            <Home />
            <Footer />
        </div>
    );
}

export default App;
