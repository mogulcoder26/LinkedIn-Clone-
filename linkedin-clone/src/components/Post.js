import React from 'react'
import "../styles/Post.css"
import { Avatar } from '@mui/material'
import InputOptions from './InputOptions'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


function Post(props) {
    return (

        <div className='post'>
        
            <div className="post__header">
        
                <Avatar src={props.photoUrl} className='avatar' />

                <div className="post__info">

                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>

                <div className="post__body">
                    <p>{props.message}</p>
                </div>

                <div className="post__buttons">
                    <InputOptions Icon={ThumbUpIcon} title="Like" color
                        ="gray"
                    />
                    <InputOptions Icon={CommentIcon} title="Comment" color
                        ="gray"
                    /><InputOptions Icon={ShareIcon} title="Share" color
                        ="gray"
                    /><InputOptions Icon={SendIcon} title="Send" color
                        ="gray"
                    />
                </div>
        </div>

    )
}

export default Post
