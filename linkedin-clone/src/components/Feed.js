import React, { useEffect, useState } from 'react'
import "../styles/Feed.css"
import CreateIcon from '@mui/icons-material/Create'
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import Post from "./Post"; 
import {db} from "../firebase";
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';


function Feed() {
    
    let [input,setInput] = useState('');
    let [posts,setPosts] = useState([]);
    

const user = useSelector(selectUser)


useEffect(()=>{
    //Creating a connection to Firebase DB ...we take a snapshot and on every snapshot we map through each doc to  `setPosts` for it to set our `posts` array 
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>{

        setPosts(snapshot.docs.map(doc=>{
            return {
                id:doc.id,
                data:doc.data()
            }
        })) 
    })

},[])


    const sendPost = (e)=>{
            e.preventDefault();

       db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoURL,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        
        });

        setInput('')
    }

    return (
        <div className='feed'>

            <div className="feed__inputContainer">

                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} className="" type="text" name="" id="" />
                        <button type="submit" onClick={sendPost}>Submit</button>

                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOptions className='inputOptions' Icon={ImageIcon} title="Photo" color="#7005F9"
                    />
                    <InputOptions className='inputOptions' Icon={SubscriptionsIcon} title="Video"
                        color="#E7A33E" /><InputOptions className='inputOptions' Icon={EventIcon} title="Event"
                            color="#C0CBCD" /><InputOptions className='inputOptions' Icon={CalendarViewDayIcon} title="Write article"
                                color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}

            {posts.map((post)=>{
                return (
                <Post 
                key = {post.id}
                name = {post.data.name}
                description ={post.data.description}
                message = {post.data.message}
                photoUrl = {post.data.photoUrl}   
                />)
            })}
            

        </div>
    )
}

export default Feed
