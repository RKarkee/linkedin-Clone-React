import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="/bgimage.jpg" alt="bgimage" />
        <Avatar src="mk.jpg" className="sidebar__avatar" />
        <h2>Manish Karki</h2>
        <h4>maniskarki01@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1505</p>
        </div>
        
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2605</p>
          </div>
        
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('react.js')}
          {recentItem('programming')}
          {recentItem('softwareDevelopment')}
          {recentItem('design')}
          {recentItem('python')}
          {recentItem('django')}
        
      </div>
    </div>
  );
}

export default Sidebar;
