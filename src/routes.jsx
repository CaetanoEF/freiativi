import { BrowserRouter, Routes,Route } from "react-router-dom";
import Sobre from "./pages/sobre";
import Inicial from "./pages/ini";
import Ex1 from "./pages/ex011";
import React from 'react';
import Ex2 from "./pages/ex022";
import Ex3 from "./pages/ex033";
import Ex4 from "./pages/ex044";
import Ex5 from "./pages/ex055";
import Ex6 from "./pages/ex066";

export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicial />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path= '/inicial' element={<Inicial/>}/>
                
                <Route path ='/ex2' element= {<Ex2 />}/>
                <Route path ='/ex1' element= {<Ex1 />}/>
               
                <Route path = '/ex4' element= {<Ex4 />}/>
                <Route path = '/ex5' element= {<Ex5 />}/>
                <Route path = '/ex6' element= {<Ex6 />}/>
                
           
            </Routes>
        </BrowserRouter>
    );
}
