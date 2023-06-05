import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import AddUser from "./pages/AddUser"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<AddUser />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}