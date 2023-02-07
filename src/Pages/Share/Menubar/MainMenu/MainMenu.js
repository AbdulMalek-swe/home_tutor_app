import React from 'react';
import DownMenubar from '../DownMenubar/DownMenubar';
import UpNavbar from '../UpMenubar/UpNavbar';

const MainMenu = () => {
    return (
        <div   className='fixed w-full z-50'>
            <UpNavbar/>
            <DownMenubar/>
        </div>
    );
};

export default MainMenu; 