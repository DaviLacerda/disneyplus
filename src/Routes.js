import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/Home/Home";
import Content from "./pages/Content/Content";
import Contact from "./pages/Contact/Contact";
import Search from "./pages/Search/Search";
import Watchlist from "./pages/Watchlist/Watchlist";

function RoutesSite() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='*' element={<Home/>}></Route>                   
                    <Route path='/search' element={<Search/>}></Route>
                    <Route path='/watchlist' element={<Watchlist/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path=':name' element={<Content/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default RoutesSite;