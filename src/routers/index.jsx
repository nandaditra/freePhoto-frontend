import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "../pages/Main"
import NotFound from "../pages/NotFound"
import Signin from "../pages/SignIn"
import Login from "../pages/Login"
import OverviewPhoto from "../pages/OverviewPhoto"
import ResultSearch from "../pages/ResultSearch"

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Main />} />
                 <Route path="/p/notfound" element={<NotFound />} />
                 <Route path="/p/signup" element={<Signin />} />
                 <Route path="/p/login" element={<Login />} />
                 <Route path="/p/overviewphoto" element={<OverviewPhoto/>}/>
                 <Route path="/p/resultsearch" element={<ResultSearch />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers