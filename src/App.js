import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feeds/Feed';
import Header from './Headers/Header';
import Sidebar from './Sidebars/Sidebar';
import Login from './account/Login';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
     <Header />
     {!user ?(
       <Login />
     ):(
      <div className="app__body">

      {/* sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      </div>

     )}

    
    </div>
  );
}

export default App;
