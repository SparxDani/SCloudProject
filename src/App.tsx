import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainHeader from "./common/MainHeader.tsx";
import MainFooter from "./common/MainFooter.tsx";
import MainBanner from "./common/MainBanner.tsx";
import MainNav from "./common/MainNav.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Game.tsx";

function App() {
    return(
        <>
            <BrowserRouter>
                <MainHeader/>
                <MainFooter/>
                <MainBanner/>
                <MainNav/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/game' element={<Game/>}/>
                </Routes>
                <MainFooter></MainFooter>
            </BrowserRouter>
        </>
    );
}


export default App
