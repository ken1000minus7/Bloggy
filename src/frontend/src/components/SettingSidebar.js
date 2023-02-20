import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { SidebarItem } from './SettingSidebarItem';

const SettingSidebar = () => {
    const [width,setWidth] = useState(window.innerWidth)
    const [username,setUsername] = useState(localStorage.getItem("username"))

    const location = useLocation();
    let current = (location.pathname.slice(1));
    const borderColor = window.location.pathname === '/settings' ? 'bg-[#f0def4]' : ''
    // console.log(current);
    return (
        <>
        {console.log({current})}
            <div className="w-20% bg-[#ede7f6] shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
                    <div className=''>
                    <ul className="list-none">
                            <SidebarItem to="/settings/profile" title="Profile" icon={<AccountCircleIcon fontSize={(width>830 || width<600 ? "medium" : "large")} />}/> 
                            <SidebarItem to="/settings/account" title="Account" icon={<SettingsIcon fontSize={(width>830 || width<600 ? "medium" : "large")}/>} />
                    </ul>
                    </div>
            </div>
        </>
    );
}


export default SettingSidebar