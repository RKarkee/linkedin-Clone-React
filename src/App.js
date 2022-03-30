import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feeds/Feed";
import Header from "./Headers/Header";
import Sidebar from "./Sidebars/Sidebar";
import Login from "./account/Login";
import { auth } from "./Firebase";
import Widgets from "./Widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
