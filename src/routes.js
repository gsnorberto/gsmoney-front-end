import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import AddUser from "./pages/AddUser"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AnnualHistory from "./pages/AnnualHistory"
import Goals from "./pages/Goals"

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<AddUser />} />
                <Route path="/" element={<Home />} />
                <Route path="/minhas-metas" element={<Goals />} />
                <Route path="/historico-anual" element={<AnnualHistory />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}