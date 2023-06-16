import React, { useEffect } from 'react';
import '../styles/App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
// import Widget from "./Widget";
import { login, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout } from "../features/userSlice.js";
import Widget from "./Widget"
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth && userAuth.user) {
        // User is logged in
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL
        }));
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, []);



  return (
    <div className='app'>
      <Header />

      {!user ?
        (<Login />)
        : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>)
      }



    </div>
  )

}

export default App;
