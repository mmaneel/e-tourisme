import './comment.css';
import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StarIcon from '@mui/icons-material/Star';

function Comment() {
  const [tab, setTab] = useState([
    { id: 1, star: 4.5, name: 'yasmine',text:'Ajoutez un Commentaire' },
    { id: 2, star: 4.7, name: 'marwa',text:'Ajoutez un Commentaire' },
  ]);

  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        id: tab.length + 1,
        star: 0, // Set the initial star rating to 0 or any default value
        name: 'User', // Set the name of the user who posted the comment
        text: commentText.trim(),
      };
      setTab([...tab, newComment]);
      setCommentText('');
    }
  };

  return (
    <>
      {tab.map((e) => (
        <div className='comment' key={e.id}>
          <div className='profile_comment'>
            <AccountCircleOutlinedIcon sx={{ width: '60px', height: '60px' }} />

            <div>
              <StarIcon sx={{ color: '#FFC700', width: '20px', height: '20px' }} />
              <span style={{ fontSize: '18px' }}>{e.star}</span>
            </div>
          </div>
          <div className='text_comment'>
            <h5 className='h-name'>{e.name}</h5>
            <p className='spn-text'>{e.text}</p>
          </div>
        </div>
      ))}

      <div className='Add_Comment'>
        <span> Ajoutez un Commentaire</span>
        <div>
          <textarea
            className='comment_input'
            placeholder='Ecrivez votre commentaire ici...'
            value={commentText}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button onClick={handleCommentSubmit}>Publier</button>
      </div>
    </>
  );
}

export default Comment;