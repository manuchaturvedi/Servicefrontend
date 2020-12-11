
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, BrowserRouter as Router,  Switch,
    Route } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Login from './Login.js';
import Signin from './signin.js';
import SideBar from './sidebar.js';
import AddAgent from './AddAgent.js';
import Table from './Tabledata.js';
import TableofAgent from './TableofAgent';
import Logout from './Logout.js';
function Home() {
  return <div className="container">
    <Login/>
    </div>;
}
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <Router>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={'nav-menu active'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  
                </li>
              );
            })}
          </ul>
          
        </nav>
      </IconContext.Provider>
      <Switch>
          <Route path='/AddAgent'>
              <AddAgent/>
          </Route>
          <Route path='/AddBooking'>
              <Signin/>
          </Route>
          <Route path="/BookingTable">
          <Table />
        </Route><Route path="/AgentTable">
          <TableofAgent/>
          </Route>
          <Route path="/Logout">
         <Logout/>
          </Route>
          </Switch>
      </Router>
    </>
  );
}

export default Navbar;