import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Favourite from '../pages/Favourite/Favourite';
import Search from '../pages/Search/Search';
import Calculator from '../pages/Calculator/Calculator';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AppRouter = () => {
    const location = useLocation()
    return (

        <Routes location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/search' element={<Search />} />
            <Route path='/calculator' element={<Calculator />} />
        </Routes>
    )
}


export default AppRouter