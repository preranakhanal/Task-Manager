import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './sidebar.scss'

import { SearchOutlined, NavigateNext, Checklist, CalendarMonthOutlined, StickyNote2, Logout, Add} from '@mui/icons-material';
const Sidebar = () => {
  return (
        <div className="sidebar">
        <div className="top">
            <div className="menu">
                <span className="menu-title">Menu </span>
                <MenuIcon/>
            </div>
            <div className="search">
                <input type="text" placeholder='Search...' />
                <SearchOutlined/>
            </div>
        </div>
        <div className="center">
            <ul>
                <p className="title">TASKS</p>
                <li>
                    <NavigateNext className="icon"/>
                    <span>Upcoming</span> 
                    <div className="counter">5</div>
                </li>
                <li>
                    <Checklist className="icon" />
                    <span>Today</span>
                    <div className="counter">5</div>
                </li>
                 <li>
                   <CalendarMonthOutlined className="icon" />
                    <span>Calendar</span>
                </li>
                 <li>
                    <StickyNote2 className="icon" />
                    <span>Sticky Wall</span>
                </li>
            
            <p className="title">CATEGORY</p>
            
                <li>
                    <div className="color" style={{ backgroundColor: '#e74c3c' }}></div>
                    <span>Personal</span>
                    <div className="counter">5</div>
                </li>
                <li>
                    <div className="color" style={{ backgroundColor: '#3498db' }}></div>
                    <span>Work</span>
                    <div className="counter">10</div>
                </li>
                <li>
                    <div className="color" style={{ backgroundColor: '#f1c40f' }}></div>
                    <span>Others</span>
                    <div className="counter">8</div>
                </li>
            </ul>
         <p className="title">TAGS</p>
         <div className="tags">
            <div className="tag" style={{ backgroundColor: 'red', color: '#e74c3c' }}>
                <span style={{ color: 'white' }}>TAG 1</span>
            </div>
            <div className="tag" style={{ backgroundColor: 'blue', color: '#3498db' }}>
                <span style={{ color: 'white' }}>TAG 2</span>
            </div>
            <div className="tag add-tag">
                <input type="text" placeholder='New Tag name' style={
                    {
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        width: '85%',
                        color: '#333',
                        fontSize: '14px',
                     
                        
                }} />

                <Add style ={{ fontSize: '18px', fontWeight: 'bold', color: '#333'}}/>
            </div>
         </div>
        </div>
    <br />
        <div className="bottom">
            <ul>
                <li>
                   <Logout className="icon" />
                    <span>Sign out</span>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Sidebar