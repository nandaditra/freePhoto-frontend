import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "../pages/Main"
import NotFound from "../pages/NotFound"
import Signin from "../pages/SignIn"
import Login from "../pages/Login"
import OverviewPhoto from "../pages/OverviewPhoto"
import ResultSearch from "../pages/ResultSearch"
import OverviewPhotoSearch from "../pages/OverviewPhotoSearch"

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Main />} />
                 <Route path="/signin" element={<Signin />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/photos/:photoId" element={<OverviewPhoto/>}/>
                 <Route path="/photos/search/:photoId" element={<OverviewPhotoSearch/>} />
                 <Route path="/photos/searchphoto/:queryId" element={<ResultSearch />}/>
                 <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers