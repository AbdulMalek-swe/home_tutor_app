import React from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from '../Pages/Share/Menubar/MainMenu/MainMenu';

const Main = () => {
    return (
        <div>
            <MainMenu/>
            <Outlet/>
        </div>
    );
};

export default Main;