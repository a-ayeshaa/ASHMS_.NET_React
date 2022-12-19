import { BrowserRouter, Routes, Route } from "react-router-dom";
import MedicineList from "./AdminComponents/MedicineList";
import About from "./AllUserComponents/About";
import Home from "./AllUserComponents/Home";
import Login from "./AllUserComponents/Login";
import BookAppointment from "./PatientComponents/BookAppointment";
import DoctorList from "./PatientComponents/DoctorList";
import TestList from "./PatientComponents/TestList";
const Main = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login/>}/>

                {/* TAHMID */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin/medicines" element={<MedicineList />} />

                {/* AYESHA */}
                <Route path="/patient/doctorlist" element={<DoctorList />} />
                <Route path="/patient/doctorlist/:id" element={<BookAppointment />} />
                <Route path="/patient/testlist" element={<TestList />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Main;