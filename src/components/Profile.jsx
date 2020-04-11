import React from 'react';
import s from './Profile.module.css';
    
const Profile = () => {
  return  <div className={s.content}>
    <div>
      <img src='https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'></img>  
    </div>
    <div>
       ava + description 
    </div>
    <div>
       My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
           <div className={s.item}>
             post 1
           </div>
           <div className={s.item}>
             post 1
           </div>
        </div>
    </div>
  </div>
}

export default Profile;