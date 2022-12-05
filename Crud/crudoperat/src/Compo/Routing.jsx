import React from 'react';
import {Routes, Route} from "react-router-dom"
import Create from "./Create"
import Read from './Read';
import Edit from './Edit';
import Cr from '../Crud/Cr';
import Re from '../Crud/Re';
import Ed from '../Crud/Ed';

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Create/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/edit" element={<Edit/>}/>
        
        </Routes>
    </div>
  )
}

export default Routing