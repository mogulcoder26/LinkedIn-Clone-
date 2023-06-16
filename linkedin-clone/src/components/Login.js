import React, { useState } from 'react'
import '../styles/Login.css'

import { auth } from "../firebase"
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/userSlice';

function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch()

    const register = () => {
        if (name.length < 3) {
            return alert("Please Enter a Full Name")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                console.log(userAuth)
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))
                    })
                    .catch(e => { alert(e) })
            })
    }
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{

            dispatch(
                login({
                    email:userAuth.user.email,
                    uid  :userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    profileUrl:userAuth.user.photoURL
                })
            )



        })





    }


    return (
        <div className='login'>

            <img src="https://img.freepik.com/free-icon/linkedin_318-246161.jpg" alt="" />


            <form >
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (required if registering)' />
                <input placeholder='Profile Pic URI (Optional)' type="text" />
                <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
                <button type="submit" value={profilePic} onChange={e => setProfilePic(e.target.value)} onClick={loginToApp}>Sign in!</button>
            </form>
            <p>Not a member ?
                <span className='login__register' onClick={register}>Register Now!</span>
            </p>
        </div>
    )
}




export default Login
