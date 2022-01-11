import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

function RoutesSite() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='*' element={<Home/>}></Route>                   
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path=':name' element={<Contact/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default RoutesSite;