import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Create from "./components/Create";
import MyPets from "./components/MyPets";




function App() {
    return (
        <div id="container">

            <Header />


            <main id="site-content">
                <Routes>
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/my-pets" element={<MyPets />} />
                </Routes>

            </main>


            <Footer />

        </div>
    );
}

export default App;
