import PetList from "./PetList";

import {Routes, Route, Link} from "react-router-dom";

function Dashboard() {
    
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <nav>
            <Link to="types" className="button" >TYPES</Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/" element={<PetList  />} />
                    <Route path="/types" element= {<p >Types..</p>}/>
                </Routes>
            </section>
        

        </section>
    )

}

export default Dashboard;