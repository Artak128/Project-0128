import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/dd/15/58/dd155852fcef1a3d3001dfbe24eb2c10.jpg" ></img>
                {props.message}
            <div>
                <span>Like</span> {props.likesCount}
                
            </div>
            
               
            
        </div>

    )
}

export default Post;