import React from 'react';
import faker from 'faker';


const CommentDetail = (props) => {
    return (
        <div className="comment">
              <a href="/" className="avator">
                <img alt="avatar" src={faker.image.avatar()} />
             </a>
             <div className="content">
               <a href="/" className="author">{props.Auther}</a>

               <div className="metadata">
                 <span className="date">Today at 6:00PM</span>
               </div>
               <div className="text">
                  Nice blog post!
               </div>
             </div>
           </div>
   
    )
}

export default CommentDetail;