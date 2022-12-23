import { BrowserRouter, Routes, Route } from "react-router-dom";
import MedicineList from "./AdminComponents/MedicineList";
import About from "./AllUserComponents/About";
import Home from "./AllUserComponents/Home";
import Login from "./AllUserComponents/Login";
import BookAppointment from "./PatientComponents/BookAppointment";
import DoctorList from "./PatientComponents/DoctorList";
import Transactions from "./PatientComponents/Transactions";
import TestCart from "./PatientComponents/TestCart";
import TestList from "./PatientComponents/TestList";
import ViewAppointments from "./DoctorComponents/ViewAppointments";
import TransactionDetails from "./PatientComponents/TransactionDetails";
const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                {/* TAHMID */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin/medicines" element={<MedicineList />} />

                {/* AYESHA */}
                <Route path="/patient/doctorlist" element={<DoctorList />} />
                <Route path="/patient/doctorlist/:id" element={<BookAppointment />} />
                <Route path="/patient/testlist" element={<TestList />} />
                <Route path="/patient/testcart" element={<TestCart />} />
                <Route path="/patient/transactions" element={<Transactions />} />
                <Route path="/patient/transactions/:id" element={<TransactionDetails />} />

                {/*SAMEEN*/}
                <Route path="/doctor/appointments" element={<ViewAppointments />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Main;