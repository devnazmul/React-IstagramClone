import React from 'react'
import './Story.css'

export default function Story({ imgUrl, name, myStory = false }) {
    
    return (
        <div className='story'>
            <div className='story_content mx-2'>
                <div className='story_profile'>
                    <img src={ imgUrl } alt=""/>
                </div>
            </div>
            <h5>{ name }</h5>
        </div>
    )
}
