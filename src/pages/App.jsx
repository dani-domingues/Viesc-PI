import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from './Home';
import Login from './Login';

function App() {

    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>

    )
}
export default App;