import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';
import OverflowScrolling from 'react-overflow-scrolling';



function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
       //run the code once when the sidebar components load
       db.collection('rooms').onSnapshot((snapshot) => 
           setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            }))
        )
    );
    }, [])

    return (
        <OverflowScrolling className='overflow-scrolling'>
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Raj Chat Group </h2>
                    <h3><FiberManualRecordIcon/> {user?.displayName} </h3>
                </div>
                <CreateIcon/>                
            </div>    
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & User Groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels"/>
            <hr/>
            {/* Connect db And list all the channels */}
            {channels.map(channel => (
                <SidebarOption title = {channel.name} id = {channel.id}/>
                
            ))}
            {/*Sidebar ... */}
        </div>
        </OverflowScrolling>

    )
}

export default Sidebar;
