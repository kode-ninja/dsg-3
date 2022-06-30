import './App.css';
import PageWithRequests from "./pages/requests/PageWithRequests";
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Nav from "./nav/Nav";

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/requests" element={<PageWithRequests/>}/>
            </Routes>
        </div>
    );
}

export default App;
