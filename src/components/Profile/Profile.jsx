import React from 'react';
import s from  './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './MyPosts/Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';




const Profile = (props) => {
    
    return ( 
    <div>
        <Profileinfo />
        <MyPostsContainer  />
    </div>
    )
}

export default Profile;