import React, { useState } from 'react'
import "../styles/Feed.css"
import CreateIcon from '@mui/icons-material/Create'
import Button from '@mui/material/Button';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post"

function Feed() {


const [posts,setPosts] = useState([]);

    const sendPost =(e)=>{
            e.preventDefault();

            setPosts = ['hi',...posts]
    }

    return (
        <div className='feed'>

            <div className="feed__inputContainer">

                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input className="" type="text" name="" id="" />
                        <Button onClick={sendPost} type='Submit'>Send
                        </Button>
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
                <Post / >
            })}


            <Post name='Soubhik Gon' message='This is a test' description='IIIT-Bh"26' />

        </div>
    )
}

export default Feed
