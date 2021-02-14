import React from 'react'
import "./Feed.css";
import Post from './Post/Post';
import profile_main from "../../../../assets/imgs/profile_main.jpg";

export default function Feed() {
    return (
        <div className='feed'>
            <Post name='Chadni Khan' picUrl={profile_main} />
        </div>
    )
}
