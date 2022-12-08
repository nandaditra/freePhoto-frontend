import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "../pages/Main"
import NotFound from "../pages/NotFound"
import Signin from "../pages/SignIn"
import Login from "../pages/Login"

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Main />} />
                 <Route path="/p/notfound" element={<NotFound />} />
                 <Route path="/p/signup" element={<Signin />} />
                 <Route path="/p/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers