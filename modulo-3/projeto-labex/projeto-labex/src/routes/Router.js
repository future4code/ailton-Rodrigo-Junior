import ApplicationForm from "../pages/ApplicationForm";
import Home from "../pages/Home";
import ListTrips from "../pages/ListTrips";
import Login from "../pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="listTrips" element={<ListTrips />} />
                    <Route path="applicationForm" element={<ApplicationForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
