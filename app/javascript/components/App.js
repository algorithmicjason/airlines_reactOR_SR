import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Airlines from "./Airlines/Airlines"
import Airline from "./Airline/Airline"

const App = () => {
    return (
    <Routes>
        <Route path="/" element={<Airlines />}/>
        <Route path="/airline/:slug" element={<Airline />}/>
    </Routes>
    // <Routes>
    
    //     <Airlines exact path="/" />
    //     <Airline exact path='/airline' />
    // </Routes>
    )
}

export default App