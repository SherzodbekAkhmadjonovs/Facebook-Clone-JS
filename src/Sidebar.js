import React from 'react'
import './Sidebar.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div>
            <div className="sidebar">
                <div className="ic2">
                    <SidebarRow src={user.photoURL} title={user.displayName}/>
                </div>
                <div className="ic"><LocalHospitalIcon font-size="large"/>
                    <SidebarRow
                    title="Covid-19 Info Centre"/>
                </div>
                <div className="ic"><EmojiFlagsIcon font-size="large"/>
                    <SidebarRow title="Pages"/> 
                </div>
                <div className="ic"><PeopleIcon font-size="large"/>
                    <SidebarRow title="Friends"/>
                </div>
                <div className="ic"><ChatIcon font-size="large"/>
                    <SidebarRow title="Messenger"/>
                </div>
                <div className="ic"><StorefrontIcon font-size="large"/>
                    <SidebarRow title="Marketplace"/>
                </div>
                <div className="ic"><VideoLibraryIcon font-size="large"/>
                    <SidebarRow title="Videos"/> 
                </div>
                <div className="ic"><ExpandMoreOutlinedIcon font-size="large"/>
                    <SidebarRow title="Marketplace"/> 
                </div>
            </div>
        </div>
    )
}

export default Sidebar
