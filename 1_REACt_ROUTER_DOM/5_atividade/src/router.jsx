import { Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    )
}

export default Router