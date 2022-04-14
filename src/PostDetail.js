import React, { useState, useEffect } from 'react';

function PostDetail({ postId }) {
const [comments, setComments] = useState([])


useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then((response) => response.json())
  .then((data) => setComments(data))
  .catch((error) => console.log(error))
}, [postId])

return (
  <div>
    {comments.map((comment) => (
      <div>
        <p>{comment.body}</p>
      </div>
    ))}
  </div>
)
}

export default PostDetail;