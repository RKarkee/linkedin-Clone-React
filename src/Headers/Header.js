import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";


function Header() {
  const dispatch =useDispatch();
  // const user = useSelector(selectUser)
  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
          alt="linkedinlogo"
        />
        <div className="header__search">
          {/* searchIcon */}
          <SearchIcon />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar={true} title='Me' onClick={logoutOfApp}/>
      </div>
    </div>
  );
}

export default Header;
